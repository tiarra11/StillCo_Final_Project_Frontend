import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/index.scss";

export class Services extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<h1>Services</h1>
				<p>This is the Services section</p>
			</div>
		);
	}
}
