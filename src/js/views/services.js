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
				<div className="container rounded-0">
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
					<div className="mb-5" />
				</div>
				<div className="container my-5">
					<div className="card-deck">
						<div className="card">
							<img src="" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Vip Package</h5>
								<p className="card-text">
									This is a longer card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
								<ul>
									<li>Reason 1</li>
									<li>Reason 1</li>
									<li>Reason 1</li>
									<li>Reason 1</li>
									<li>Reason 1</li>
									<li>Reason 1</li>
									<li>Reason 1</li>
									<li>Reason 1</li>
									<li>Reason 1</li>
								</ul>
								<p className="card-text">
									<small className="text-muted" />
								</p>
							</div>
						</div>
						<div className="card">
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									This card has supporting text below as a natural lead-in to additional content.
								</p>
								<p className="card-text">
									<small className="text-muted" />
								</p>
							</div>
						</div>
						<div className="card">
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This card has even longer content than the first to show that equal height
									action.
								</p>
								<p className="card-text">
									<small className="text-muted" />
								</p>
							</div>
						</div>
					</div>
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
