import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<div className="m-auto">
			<div className="hide row my-1 foot">
				<Link to="/Contact" className="footer-item">
					Contact
				</Link>{" "}
				| <Link to="/terms">Terms &amp; Conditions </Link> sTill Colllective |{" "}
				<Link to="/terms">The [A.M.P.D.] Life</Link> 2017-2019
			</div>
		</div>
	);
};
