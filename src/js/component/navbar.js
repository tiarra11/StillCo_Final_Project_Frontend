import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class Navbar extends React.Component {
	render() {
		let path = window.location.pathname;

		return (
			<nav className="navbar navbar-expand-md navbar-light">
				<div
					className={path == "/" ? "fadein navbar-collapse collapse" : "navbar-collapse collapse"}
					id="collapsingNavbar">
					<ul className="navbar-nav">
						<li className="nav-item mr-4">
							<Link to="/" className="stillLogoNav">
								<div>
									<span id="still_sNav">s</span>
									<span id="still_TNav">T</span>
									<span id="still_illNav">ill</span>
								</div>
							</Link>
						</li>
					</ul>
					<ul className="navbar-nav ml-auto logged">
						<li className="nav-item mr-4">
							<Link to="/portfolio" className="navbarlink">
								<div>
									<span id="portfolio_porNav">Por</span>
									<span id="portfolio_TNav">T</span>
									<span id="portfolio_folioNav">folio</span>
								</div>
							</Link>
						</li>
						<li className="nav-item mr-4">
							<Link to="/Services" className="navbarlink">
								Services
							</Link>
						</li>
<<<<<<< HEAD
						<Context.Consumer>
							{({ store }) => {
								let loginMessage = "";
								let path = "/login";

								const userStatus = store.client.find(item => {
									return item.client_login_status === true;
								});
								// let node = document.createElement("LI");
								// let parent = document.querySelector(".logged");
								if (userStatus) {
									// loginMessage = "Welcome " + userStatus.email;
									loginMessage = "Logout ";
									path = "/logout";
									// let textLogout = document.createTextNode("Logout");
									// node.appendChild(textLogout);
									// parent.appendChild(node);
								} else {
									loginMessage = "Login";
								}

								return (
									<li className="nav-item mr-5">
										<Link to={path} className="navbarlink">
											{loginMessage}
										</Link>
									</li>
								);
							}}
						</Context.Consumer>
=======
						<li className="nav-item mr-5">
							<Link to="/login" className="navbarlink">
								<div>
									<span id="collective_collecNav">Collec</span>
									<span id="collective_TNav">T</span>
									<span id="collective_iveNav">ive</span>
								</div>
							</Link>
						</li>
						<li className="nav-item mr-4">
							{" "}
							<Link to="/cart">
								<i className="fas fa-shopping-cart" style={{ color: "white" }} />
							</Link>
						</li>
>>>>>>> b336ee4f1a91b9f6a61856a0bdcde566252486f8
					</ul>
				</div>
			</nav>
		);
	}
}
{
	/* <Context.Consumer>
{({ store }) => {
	let declaredLogin = "";
	let path = "/login";
	const loggedInClient = store.client.find(client => {
		return client.client_login_status === true;
	});
	if (loggedInClient) {
		declaredLogin = "Welcome " + loggedInClient.email;
		path = "/logout";
	} else {
		// declaredLogin = "Login";
		declaredLogin = (
			<li className="nav-item mr-5">
				<Link to="/login" className="navbarlink">
					<div>
						<span id="collective_collecNav">The Collec</span>
						<span id="collective_TNav">T</span>
						<span id="collective_iveNav">ive </span>
						<span id="collective_loginNav"> Login</span>

						{this.state.client_login_status ? <div>true</div> : 
						
						<div>false</div>}
					</div>
				</Link>
			</li>
		);
	}
}}
</Context.Consumer> */
}

{
	/* <li className="nav-item mr-5">
<Link to="/login" className="navbarlink">
	<div>
		<span id="collective_collecNav">The Collec</span>
		<span id="collective_TNav">T</span>
		<span id="collective_iveNav">ive </span>
		<span id="collective_loginNav"> Login</span>
	</div>
</Link>
</li> */
}
