import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/Card";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/index.scss";

export class Services extends React.Component {
	render() {
		return (
			<div>
				<div className="container">
					<div>
						<h2>What your brand needs– How you want.</h2>
						<p id="servicesSectionBlurb">
							Are you missing the feature that is going to take your brand to the next level? We can help
							with that. The sTill Collective offers on demand access to a wide range of highly
							experienced professionals in their respective fields and beyond. And you don&apos;t even
							need to leave your office.
						</p>
						<p id="servicesSectionBlurb">Choose from these options (select all that apply):</p>
					</div>
					<div className="mb-2 d-flex justify-content-center">
						<h3>Strategy</h3>
					</div>
					<div className="row d-flex justify-content-center m-auto">
						<Button className="mx-5" variant="primary" size="lg">
							Objective/ Action Planning
						</Button>
						<Button className="mx-5" variant="primary" size="lg">
							Copywriting
						</Button>
						<Button className="mx-5" variant="primary" size="lg">
							Product Design
						</Button>
					</div>
					<div className="mb-2 mt-5 d-flex justify-content-center">
						<h3>Identity</h3>
					</div>
					<div className="row d-flex justify-content-center m-auto">
						<Button className="mx-5" variant="primary" size="lg">
							Logo Design
						</Button>
						<Button className="mx-5" variant="primary" size="lg">
							Website Design
						</Button>
						<Button className="mx-5" variant="primary" size="lg">
							Photography
						</Button>
					</div>
					<div className="mb-2 mt-5 d-flex justify-content-center">
						<h3>Marketing</h3>
					</div>
					<div className="row d-flex justify-content-center m-auto">
						<Button className="mx-5" variant="primary" size="lg">
							Advertising
						</Button>
						<Button className="mx-5" variant="primary" size="lg">
							SEO
						</Button>
						<Button className="mx-5" variant="primary" size="lg">
							Social Media Management
						</Button>
					</div>
				</div>
				<div className="row mx-auto my-5">
					<CardDeck>
						<Card>
							<Card.Header>Featured</Card.Header>
							<Card.Body>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">Last updated 3 mins ago</small>
							</Card.Footer>
						</Card>
						<Card>
							<Card.Header>Featured</Card.Header>
							<Card.Body>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This card has supporting text below as a natural lead-in to additional content.{" "}
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">Last updated 3 mins ago</small>
							</Card.Footer>
						</Card>
						<Card>
							<Card.Header>Featured</Card.Header>
							<Card.Body>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This card has even longer content than the first to show that equal height
									action.
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">Last updated 3 mins ago</small>
							</Card.Footer>
						</Card>
					</CardDeck>
				</div>
				<div className="my-5">
					<Button className="mx-5" variant="primary" size="lg">
						<Link to="/login">Let&apos;t Optimize Your Brand</Link>
					</Button>
				</div>
			</div>
		);
	}
}
