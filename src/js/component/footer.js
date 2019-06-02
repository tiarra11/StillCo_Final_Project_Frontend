import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<div>
			<div className="footer mt-auto py-3 text-center" />
			<li className="nav-item text-center">
				<Link to="/Contact">Contact</Link>
			</li>
			<p className="mt-5 mb-3 text-muted">© 2017-2018</p>
		</div>
	);
};
