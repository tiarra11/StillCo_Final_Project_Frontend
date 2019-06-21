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
					className={path == "/" ? "hide navbar-collapse collapse" : "navbar-collapse collapse"}
					id="collapsingNavbar">
					<ul className="navbar-nav">
						<li className="nav-item mr-4">
							<Link to="/" className="stillLogoNav navcolor">
								<div className="stillLogoNav">
									<span id="sPositioningNav">s</span>
									<span id="stillTNav">T</span>
									<span id="illpositioningNav">ill</span>
								</div>
							</Link>
						</li>
					</ul>
					<ul className="navbar-nav ml-auto ">
						<li className="nav-item mr-4">
							<Link to="/portfolio" className="navbarlink">
								Portfolio
							</Link>
						</li>
						<li className="nav-item mr-4">
							<Link to="/Services" className="navbarlink">
								Services
							</Link>
						</li>
						<li className="nav-item mr-5">
							<Link to="/login" className="navbarlink">
								Collective
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
