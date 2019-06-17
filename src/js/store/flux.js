const getState = ({ getStore, setStore }) => {
	return {
		store: {
			strategyCarouselContent: [
				{
					title: "sTrategy",
					image: "https://www.canny-creative.com/wp-content/uploads/2019/02/digital-marketing-tools.jpg",
					header: "Plan. It. Out.",
					info:
						"We help you build trust with your customers, through a comprehensive layout of your business objectives and how to execute them."
				},
				{
					title: "identiTy",
					image: "https://www.canny-creative.com/wp-content/uploads/2019/02/digital-marketing-tools.jpg",
					info: "Design, Logos, and Websites."
				},
				{
					title: "markeTing",
					image: "https://www.canny-creative.com/wp-content/uploads/2019/02/digital-marketing-tools.jpg",
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

			services: [
				{
					title: "Copywriting",
					shortdescription: "Copywriting short description",
					longdescription: "Copywriting long description",
					cost: 400
				},
				{
					title: "Strategy",
					shortdescription: "Copywriting short description",
					longdescription: "Copywriting long description",
					cost: 400
				}
			]
		},
		actions: {
			createClient: (name, email, password) => {
				const url = "https://3000-d1676f3c-a4e9-47f2-8ccb-eac2b3415504.ws-us0.gitpod.io/client";
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
				});
			}
		}
	};
};

export default getState;
