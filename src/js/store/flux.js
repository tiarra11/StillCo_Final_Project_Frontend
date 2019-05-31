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
