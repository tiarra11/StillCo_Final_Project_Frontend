import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
				<a className="navbar-brand" href="#" />
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse justify-content-center" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link to="/about">About</Link>
						</li>
						<li className="nav-item">
							<Link to="/portfolio">Portfolio</Link>
						</li>
						<li className="nav-item">
							<Link to="/Services">Services</Link>
						</li>
						<li className="nav-item">
							<Link to="/Contact">Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
