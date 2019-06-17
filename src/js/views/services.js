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
					<h2>Strategy</h2>
					<p id="servicesSectionBlurb">
						Are you missing the feature that is going to take your brand to the next level? We can help with
						that. The sTill Collective offers on demand access to a wide range of highly experienced
						professionals in their respective fields and beyond. And you don&apos;t even need to leave your
						office.
					</p>
					<div className="card-deck">
						<Context.Consumer>
							{({ store, strategy }) => {
								return store.strategy.map((item, index) => {
									return (
										<div key={index} className="card col-4">
											<div className="card-body">
												<p className="card-text">{item.name}</p>
											</div>
										</div>
									);
								});
							}}
						</Context.Consumer>
					</div>

					<h2>Identity</h2>

					<div className="card-deck">
						<Context.Consumer>
							{({ store, identity }) => {
								return store.identity.map((item, index) => {
									return (
										<div key={index} className="card col-4">
											<div className="card-body">
												<p className="card-text">{item.name}</p>
											</div>
										</div>
									);
								});
							}}
						</Context.Consumer>
					</div>
					<h2>Marketing</h2>

					<div className="card-deck">
						<Context.Consumer>
							{({ store, marketing }) => {
								return store.marketing.map((item, index) => {
									return (
										<div key={index} className="card col-4">
											<div className="card-body">
												<p className="card-text">{item.name}</p>
											</div>
										</div>
									);
								});
							}}
						</Context.Consumer>
					</div>

					<div className="mb-5" />
				</div>
				<div className="container my-5">
					<div className="card-deck">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">sTill Standard</h5>
								<p className="card-text" />
								This package includes:
								<ul>
									<li>Logo Design</li>
									<li>Re-Branding</li>
									<li>Website Design</li>
									<li>Objective Planning</li>
								</ul>
								<p className="card-text">
									<small className="text-muted" />
								</p>
							</div>
						</div>
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Supreme Collective Package</h5>
								<p className="card-text">Our Collective Package entails the following services.</p>
								<ul>
									<li>Logo Design</li>
									<li>Re-Branding</li>
									<li>Website Design</li>
									<li>Objective Planning</li>
									<li>4 Consultation / Progress Meetings</li>

									<li>Advertising</li>
									<li>SEO</li>
									<li>Social Media Management</li>
									<li>Content Development</li>
									<li>Photography</li>
								</ul>

								<p className="card-text">
									<small className="text-muted" />
								</p>
							</div>
						</div>
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Savvy Package</h5>
								<p className="card-text">The Platinum Package includes:</p>
								<ul>
									<li>Logo Design</li>
									<li>Re-Branding</li>
									<li>Website Design</li>
									<li>Objective Planning</li>
									<li>4 Consultation / Progress Meetings</li>
									<li>Marketing</li>
									<li>Advertising</li>
									<li>SEO</li>
									<li>Social Media Management</li>
								</ul>
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
