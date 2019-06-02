import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/index.scss";

export class Terms extends React.Component {
	render() {
		return (
			// let termsAndConditionsLayout = termsAndConditions.map ()=> {
			//     return store.termsAndConditions.
			<Context.Consumer>
				{({ store }) => {
					return (
						<div className="m-auto">
							<h3>{store.termsNConditions[0].header}</h3>
							<p>{store.termsNConditions[0].tcSectionBody}</p>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
