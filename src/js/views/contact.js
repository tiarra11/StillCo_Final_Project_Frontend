import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Contact extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<h1>Hello Rigo!</h1>
				<p>This is the my contact section.</p>
			</div>
		);
	}
}
