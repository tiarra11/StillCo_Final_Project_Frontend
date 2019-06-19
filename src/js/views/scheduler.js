import React from "react";

import ListGroup from "react-bootstrap/ListGroup";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/index.scss";

export class Scheduler extends React.Component {
	render() {
		return (
			<div className="d-flex justify-content-center">
				<ListGroup className="col-md-4 mx-5">
					<h1>Available Times</h1>
					<ListGroup.Item action variant="light">
						1PM
					</ListGroup.Item>
					<ListGroup.Item action variant="light">
						4PM
					</ListGroup.Item>
				</ListGroup>
				<div className="form-check">
					<input
						className="form-check-input"
						type="radio"
						name="blankRadio"
						id="blankRadio1"
						value="option1"
						aria-label="..."
					/>
					<label className="form-check-label" htmlFor="inlineCheckbox1">
						Phone Call
					</label>
					<input
						className="form-check-input"
						type="radio"
						name="blankRadio"
						id="blankRadio1"
						value="option1"
						aria-label="..."
					/>
					<label className="form-check-label" htmlFor="inlineCheckbox1">
						Video Chat
					</label>
				</div>
			</div>
		);
	}
}
