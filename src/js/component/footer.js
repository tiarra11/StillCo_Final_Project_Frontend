import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<div className="m-auto">
			<div className="hide row m-auto">
				{/* <div className="footer mt-auto py-3 text-center" /> */}
				<div className="footer-item text-center">
					<Link to="/Contact">Contact</Link>
				</div>
				<div className="footer-item ml-5">
					<Link to="/login">The Collective</Link>
				</div>
			</div>
			<div className="row text-muted">
				<Link to="/terms">Terms & Conditions </Link>
				<p id="copyright" className="ml-4">
					{" "}
					A © sTill x <Link to="/terms">The [A.M.P.D.] Life</Link> 2017-2018
				</p>
			</div>
		</div>
	);
};
