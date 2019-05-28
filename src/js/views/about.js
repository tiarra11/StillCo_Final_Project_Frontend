import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export class About extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<h1>about!!</h1>
				<p>This page is about something.</p>
			</div>
		);
	}
}
