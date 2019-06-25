import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export class Logout extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<div className="row">
								<button onClick={() => actions.logoutClient(store.tempLoggedUserId.client_id)}>
									Logout
								</button>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
