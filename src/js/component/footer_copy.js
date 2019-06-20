import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<div className="m-auto">
			<div className="hide row my-1">
				<div className="footer-item text-center">
					<Link to="/Contact">Contact</Link>
				</div>
				<div className="footer-item ml-3">
					<Link to="/login">The Collective</Link>
				</div>
				<div className="row text-muted">
					<Link to="/terms">Terms & Conditions </Link>
					<p id="copyright" className="ml-4">
						{" "}
						A © sTill x <Link to="/terms">The [A.M.P.D.] Life</Link> 2017-2018
					</p>
				</div>
			</div>
		</div>
	);
};
