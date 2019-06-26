const getState = ({ getStore, setStore }) => {
	return {
		store: {
			strategyCardContent: [
				{
					title: "",
					image: "https://www.canny-creative.com/wp-content/uploads/2019/02/digital-marketing-tools.jpg",
					header: "Plan. It. Out.",
					info: ""
				},
				{
					title: "",
					image:
						"https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/759968/settings_images/5IbPvI1gRqqi3sgZUpJ5_MORE_LOGO_AllTeal300-01.png",

					info: ""
				},
				{
					title: "",
					image: "https://www.canny-creative.com/wp-content/uploads/2019/02/digital-marketing-tools.jpg",
					info: ""
				}
			],

			termsNConditions: [
				{
					header: "Refunds:",
					tcSectionBody:
						"Your satisfaction is our #1 priority. If you are not happy with your purchase for any reason, please contact us within 30 days for a full refund."
				},
				{
					header: "Shipping:",
					tcSectionBody:
						"Unless otherwise noted, all physical goods are shipped within 24 hours via USPS Prioirty Mail. Please refer to your purchase receipt for details."
				},
				{
					header: "Privacy Policy:",
					tcSectionBody:
						'Last updated: November 10, 2015 sTill Collective ("us”, “we”, or “our”) operates the sTillCollective.com website (the “Service”). This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service. We will not use or share your information with anyone except as described in this Privacy Policy. We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible at http://www.sTillCollective.com'
				},
				{
					header: "Information Collection And Use:",
					tcSectionBody:
						"While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your name, email address and other information (“Personal Information”)."
				},
				{
					header: "Log Data:",
					tcSectionBody:
						"We collect information that your browser sends whenever you visit our Service (“Log Data”). This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics."
				},
				{
					header: "Cookies:",
					tcSectionBody:
						"Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer’s hard drive.\
						We use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service."
				}
			],

			strategy: [
				{
					name: "Organizational Analysis",
					description:
						"An organizational analysis is a diagnostic business process that can help organizations understand their performance, look for problem areas, identify opportunities, and develop a plan of action for improving performance. In short, an organizational analysis is a review of the basic components of an organization.",
					price: 2000,
					rep: "martin"
				},
				{
					name: "	Action Planning",
					description:
						"An action plan is a detailed plan outlining actions needed to reach one or more goals. Alternatively, businessdictionary.com defines an action plan as a sequence of steps that must be taken, or activities that must be performed well, for a strategy to succeed",
					price: 3000,
					rep: "joao"
				},
				{
					name: "Corporate Re-Branding",
					description:
						"Rebranding is the process of changing the corporate image of an organisation. It is a market strategy of giving a new name, symbol, or change in design for an already-established brand. ... Rebranding is good for the business, but at the same time it may be risky. ",
					price: 5000,
					rep: "hernan"
				}
			],
			identity: [
				{
					name: "logo design",
					description: "LOGO ",
					price: 1000
				},
				{
					name: "website design",
					description:
						"Business strategy is the firm's working plan for achieving its vision, prioritizing objectives, competing successfully, and optimizing financial performance with its business model. ",
					price: 2000
				},
				{
					name: "product design",
					description:
						"Business strategy is the firm's working plan for achieving its vision, prioritizing objectives, competing successfully, and optimizing financial performance with its business model. ",
					price: 1500
				}
			],
			marketing: [
				{
					name: "Advertising",
					description:
						"Business strategy is the firm's working plan for achieving its vision, prioritizing objectives, competing successfully, and optimizing financial performance with its business model. ",
					price: 2000
				},
				{
					name: "Seo",
					description:
						"Business strategy is the firm's working plan for achieving its vision, prioritizing objectives, competing successfully, and optimizing financial performance with its business model. ",
					price: 1700
				},
				{
					name: "Social Media Managment",
					description:
						"Business strategy is the firm's working plan for achieving its vision, prioritizing objectives, competing successfully, and optimizing financial performance with its business model. ",
					price: 2500
				}
			],
			serviceCatalog: [],
			shoppingBag: [],
			client: [],
			tempLoggedUser: null,
			token: null
			// {
			// 	client_id: 2,
			// 	name: "Martin",
			// 	email: "self.email",
			// 	password: "self.password",
			// 	client_login_status: false
			// }
		},
		actions: {
			logoutClient: id => {
				setStore({ tempLoggedUser: null, token: null });
			},
			authenticateLogin: (email, password, history) => {
				const store = getStore();
				const url = process.env.HOST + "/login";
				let loggedUser = store.client.find(item => {
					return item.email == email;
				});

				console.log(loggedUser);
				fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},

					body: JSON.stringify({
						email: email,
						password: password
					})
				})
					.then(response => response.json())
					.then(token => {
						console.log(token);
						setStore({ token: token.jwt, tempLoggedUser: loggedUser });
						history.push("/dashboard");
					})
					.then(changeStatus => {
						fetch(`${process.env.HOST}/client/${loggedUser.client_id}`, {
							method: "PUT",
							headers: {
								"Content-Type": "application/json",
								authorization: "Bearer " + store.token
							},
							body: JSON.stringify({
								client_login_status: true
							})
						});
					})
					.then(getClientBack => {
						const url = process.env.HOST + "/client";
						fetch(url, {
							method: "GET",
							headers: {
								"Content-Type": "application/json"
							}
						})
							.then(response => response.json())
							.then(data => {
								const store = getStore();
								setStore({ client: data });
							})
							.catch(error => console.error("Error: It didn't work. Try again", error));
					});
				setStore({ tempLoggedUser: loggedUser });
			},

			createClient: (name, email, password, history) => {
				const url = process.env.HOST + "/client";
				fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},

					body: JSON.stringify({
						name: name,
						email: email,
						password: password
					})
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						console.log("Account Successfully Created", data);
						history.push("/dashboard");
					})
					.catch(error => console.error("Error: This didn't work. Try again", error));
			},

			addToShoppingBag: () => {
				const url = process.env.HOST + "/service_catalog";
			},

			// const store = getStore();
			// store.shoppingBag.push(item.name,item.price);
			// fetch( , {
			// 	method: "POST"
			// }).then(() => {
			// 	fetch(url)
			// 		.then(response => response.json())
			// 		.then(updatedData => {
			// 			store.cart = updatedData.reverse();
			// 			setStore({ store, cart });
			// 		});

			generateOrder: cvv => {
				const url = process.env.HOST + "/orders";
				fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						cvv: cvv
					})
				});
				// .then(resp => resp.json())
				// .then(data => {
				// 	console.log("Account Successfully Created", JSON.stringify(data));
				// 	history.push("/dashboard");
				// })
				// .catch(error => console.error("Error:", error));
			}
		}
	};
};

export default getState;
