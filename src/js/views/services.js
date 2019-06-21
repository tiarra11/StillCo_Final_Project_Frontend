import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/Card";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/index.scss";
import { Session } from "bc-react-session";

Session.start({
	payload: {
		name: [],
		price: []
	},
	expiration: 86400000
});

export class Services extends React.Component {
	render() {
		return (
			<div>
				<div className="container rounded-0 bg-red ">
					<div className="row">
						<div className="col-md-4">
							<h2 className="text-center maintitle1">StraTegy</h2>

							<Context.Consumer>
								{({ store }) => {
									return store.strategy.map((item, index) => {
										return (
											<div key={index} className="card col-12 my-4 servicecard2">
												<div
													className="card-body"
													onClick={() => {
														let { payload } = Session.get();
														Session.setPayload({ name: item.name, price: item.price });
														// let session = Session.get();
														alert(
															Session.get().payload.name +
																" " +
																Session.get().payload.price
														);
													}}>
													<p className="card-text servicetext">{item.name} </p>

													<p className="card-text servicetext">
														{item.price} <i className="fas fa-plus-circle" />
													</p>
												</div>
											</div>
										);
									});
								}}
							</Context.Consumer>
						</div>

						<div className="col-md-4">
							<h2 className="text-center maintitle2">Identity</h2>
							<Context.Consumer>
								{({ store }) => {
									return store.identity.map((item, index) => {
										return (
											<div key={index} className="card col-12 my-4 servicecard2">
												<div className="card-body">
													<p className="card-text servicetext">{item.name}</p>
												</div>
											</div>
										);
									});
								}}
							</Context.Consumer>
						</div>

						<div className="col-md-4">
							<h2 className="text-center maintitle3">Marketing</h2>
							<Context.Consumer>
								{({ store }) => {
									return store.marketing.map((item, index) => {
										return (
											<div key={index} className="card col-12 my-4 servicecard2">
												<div className="card-body">
													<p className="card-text servicetext">{item.name}</p>
												</div>
											</div>
										);
									});
								}}
							</Context.Consumer>
						</div>
					</div>
				</div>

				<div className="container rounded-0 my-5 bg-red">
					<div className="card-deck">
						<div className="card bg-details1">
							<div className="card-body">
								<h5 className="card-title">sTill Standard</h5>
								<hr />
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
						<div className="card bg-details2">
							<div className="card-body">
								<h5 className="card-title">Supreme Collective Package</h5>
								<hr />
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
						<div className="card bg-details3">
							<div className="card-body">
								<h5 className="card-title">Savage Package</h5>
								<hr />
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
					<Button className="mx-5" variant="primary" size="lg" s>
						<Link to="/login">Proceed to Checkout</Link>
					</Button>
				</div>
			</div>
		);
	}
}
