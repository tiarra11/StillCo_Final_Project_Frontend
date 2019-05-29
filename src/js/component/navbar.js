import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<div className="navList">
				<span className="navButton">sTill</span>
				<span className="navButton">About</span>
				<span className="navButton">Services</span>
				<span className="navButton">Portfolio</span>
				<span className="navButton">Contact</span>
			</div>
		);
	}
}
