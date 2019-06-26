import React from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default its just going to be Null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to Layout.jsx, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.jsx#L35
const injectContext = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);

			//this will be passed as the context value
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore => {
					localStorage.setItem("store", JSON.stringify(Object.assign(this.state.store, updatedStore)));
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					});
				}
			});
		}

		loggedInDiDMount(currentLoogedInClient) {
			fetch(`${process.env.HOST}/client`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then(resp => {
					return resp.json();
				})
				.then(data => {
					let { store } = this.state;
					store.client = data;
					this.setState({ store });
				})
				.catch(error => console.error("Error: It didn't work. Try again", error));
		}

		componentDidMount() {
			const store = localStorage.getItem("store");
			if (typeof store != "undefined") {
				this.setState({ store: JSON.parse(store) });
				if (store.token) this.loggedInDiDMount(store.client);
			}
			console.log("This is your store i localstorage: ", store);
			fetch(`${process.env.HOST}/services`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then(resp => {
					return resp.json();
				})
				.then(data => {
					console.log("Able to fetch catalog", data);
					this.state.setStore({ serviceCatalog: data });
				})
				.catch(error => console.error("Error: It didn't work. Try again", error));
		}

		render() {
			// the initial value for the context its not null anymore, but the current state of this component,
			// the context will have a getStore and setStore functions available then, because they were declared
			// on the state of this component
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default injectContext;
