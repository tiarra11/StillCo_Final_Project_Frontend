import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export class Login extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<div className="text-center py-5">
								<h1>The Collective</h1>
							</div>
							<div className="d-flex justify-content-center">
								<Form>
									<Form.Group as={Row} controlId="formHorizontalEmail">
										<Col>
											<Form.Control type="email" placeholder="Email" />
										</Col>
									</Form.Group>
									<Form.Group as={Row} controlId="formHorizontalPassword">
										<Col>
											<Form.Control type="password" placeholder="Password" />
										</Col>
									</Form.Group>
									<Form.Group as={Row}>
										<Col className="text-center">
											<Button
												onClick={() => {
													let email = document.querySelector("[type=email]").value;
													let password = document.querySelector("[type=password]").value;
													actions.authenticateLogin(email, password);
												}}>
												Log In
											</Button>
											<p>
												Don’t have an account? <Link to="/register">Register now!</Link>.
											</p>
										</Col>
									</Form.Group>
								</Form>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
