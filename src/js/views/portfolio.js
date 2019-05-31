import React from "react";
import "../../styles/index.scss";

import ControlledCarousel from "./controlledCarousel.js";

export class Portfolio extends React.Component {
	render() {

		return (
			<div className="container text-center">
				{/*
				//This commented out header was Hernan's way of explaining how to create the "sTill" logo with two different fonts.
				<h1>
					<span className="s">s</span>
					<span className="T">T</span>
					<span className="ill">ill</span>
				</h1> */}
				<div>
					<ControlledCarousel />
				</div>
			</div>
		);

	}
}
