import React from "react";
import "../../styles/index.scss";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Session } from "bc-react-session";

export class SinglePortfolioPage extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, action }) => {
					let index = this.props.match.params.theindex;
					console.log(index);
					return (
						<div className="container">
							<div className="row">
								<div className="col-md-6 m-auto">
									<h1>{store.strategy[index].title}</h1>
								</div>
							</div>
							<div className="row">
								<h1>{store.strategy[index].name}</h1>

								<div className="col-md-6 m-auto">{store.strategy[index].description}</div>
							</div>
							<div className="row">
								<div className="col-md-6 m-auto">
									<button
										type="button"
										className="btn btn-info"
										onClick={() => {
											const serviceInfo = {
												name: store.strategy[index].name,
												price: store.strategy[index].price
											};
											const { payload } = Session.get();
											const s = payload.concat(serviceInfo);
											Session.setPayload({
												payload: "hellooooooo"
											});
											console.log(Session.get());
										}}>
										Add to Cart
									</button>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
SinglePortfolioPage.propTypes = {
	match: PropTypes.object
};
