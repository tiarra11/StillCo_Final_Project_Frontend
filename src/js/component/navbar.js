import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-md navbar-light">
				<div className="navbar-collapse collapse" id="collapsingNavbar">
					<ul className="navbar-nav">
						<li className="nav-item mr-4">
							<Link to="/" className="navcolor" id="stillLogo">
								s<span id="stillT">T</span>
								ill
							</Link>
						</li>
					</ul>
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
