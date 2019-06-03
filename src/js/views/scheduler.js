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
					<ListGroup.Item action variant="light">
						1PM
					</ListGroup.Item>
					<ListGroup.Item action variant="light">
						4PM
					</ListGroup.Item>
				</ListGroup>
			</div>
		);
	}
}
