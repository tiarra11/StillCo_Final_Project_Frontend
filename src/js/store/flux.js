const getState = ({ getStore, setStore }) => {
	return {
		store: {
			strategyCarouselContent: [
				{
					title: "sTrategy",
					image:
						"https://images.unsplash.com/photo-1559163206-6615672fad34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
					header: "Plan. It. Out.",
					info:
						"We help you build trust with your customers, through a comprehensive layout of your business objectives and how to execute them."
				},
				{
					title: "identiTy",
					image:
						"https://images.unsplash.com/photo-1529974445367-5b9bf0a0586e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3025&q=80",
					info: "Design, Logos, and Websites."
				},
				{
					title: "markeTing",
					image:
						"https://images.unsplash.com/photo-1506645292803-579c17d4ba6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
					info: "Put yourself out there. We'll help you do that."
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
				}
			],

			services: [
				{
					title: "Copywriting",
					shortdescription: "Copywriting short description",
					longdescription: "Copywriting long description",
					cost: 400
				}
			]
		},
		actions: {
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();
			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});
			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
