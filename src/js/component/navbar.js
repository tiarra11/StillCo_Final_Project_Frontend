import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	// componentDidMount() {
	// 	document.querySelector("nav").style.backgroundColor = "green";
	// }

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
					<ul className="navbar-nav ml-auto ">
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
						<li className="nav-item mr-5">
							<Link to="/login" className="navbarlink">
								<div>
									<span id="collective_collecNav">Collec</span>
									<span id="collective_TNav">T</span>
									<span id="collective_iveNav">ive</span>
								</div>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
