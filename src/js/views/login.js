import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export class Login extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = { validated: false };
	}

	handleSubmit(event) {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		this.setState({ validated: true });
	}

	render() {
		const { validated } = this.state;
		return (
			<div>
				<div className="text-center py-5">
					<h1>The Collective</h1>
				</div>
				<div className="d-flex justify-content-center">
					<Form>
						<Form.Group as={Row} controlId="formHorizontalEmail">
							<Col sm={75}>
								<Form.Control type="email" placeholder="Email" />
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="formHorizontalPassword">
							<Col lg={75}>
								<Form.Control type="password" placeholder="Password" />
							</Col>
						</Form.Group>
						<Form.Group as={Row}>
							<Col sm={{ span: 20, offset: 3 }}>
								<Button type="submit">Sign in</Button>
							</Col>
						</Form.Group>
					</Form>
				</div>
			</div>
		);
	}
}

// render(<FormExample />);
