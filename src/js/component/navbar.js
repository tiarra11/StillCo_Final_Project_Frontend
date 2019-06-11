import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
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
								<div className="unHover">
									<span className="sPositioningNav">s</span>
									<span className="stillTNav">T</span>
									<span className="illpositioningNav">ill</span>
								</div>
							</Link>
						</li>
					</ul>
					{path}
					<ul className="navbar-nav ml-auto">
						<li className="nav-item mr-4">
							<Link to="/portfolio">Portfolio</Link>
						</li>
						<li className="nav-item mr-4">
							<Link to="/Services">Services</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
