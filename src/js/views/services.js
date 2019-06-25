import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/Card";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/index.scss";
import { Session } from "bc-react-session";

// Session.start({
// 	payload: {
// 		name: [],
// 		price: []
// 	},
// 	expiration: 86400000
// });

export class Services extends React.Component {
	render() {
		return (
			<div>
				<div className="container rounded-0 bg-red">
					<div className="row">
						<div className="col-md-4">
							<h2 className="text-center maintitle1">Strategy</h2>
							<p>
								We help you build trust with your customers, through a comprehensive layout of your
								business objectives and how to execute them.
							</p>

							<Context.Consumer>
								{({ store, action }) => {
									return store.strategy.map((item, index) => {
										return (
											<Link
												to={"/single-portfoliopage/strategy/" + index}
												key={index}
												style={{ textDecoration: "none" }}>
												<div className="card col-12 my-4 servicecard2">
													{/* This is where the onClick will be set for the selection of the package. */}
													<div className="card-body">
														<p className="card-text servicetext">{item.name} </p>

														<p className="card-text servicetext">$ {item.price}</p>
													</div>
												</div>
											</Link>
										);
									});
								}}
							</Context.Consumer>
						</div>

						<div className="col-md-4">
							<h2 className="text-center maintitle2">Identity</h2>
							<p>Design, Logos, and Websites.</p>
							<Context.Consumer>
								{({ store }) => {
									return store.identity.map((item, index) => {
										return (
											<Link to={"/single-portfoliopage/" + index} key={index}>
												<div key={index} className="card col-12 my-4 servicecard2">
													{/* This is where the onClick will be set for the selection of the package. */}
													<div className="card-body">
														<p className="card-text servicetext">{item.name}</p>
														<p className="card-text servicetext">$ {item.price}</p>
													</div>
												</div>
											</Link>
										);
									});
								}}
							</Context.Consumer>
						</div>

						<div className="col-md-4">
							<h2 className="text-center maintitle3">Marketing</h2>
							<p>Put yourself out there. We Will help you do that.</p>
							<Context.Consumer>
								{({ store }) => {
									return store.marketing.map((item, index) => {
										return (
											<div key={index} className="card col-12 my-4 servicecard2">
												{/* This is where the onClick will be set for the selection of the package. */}
												<div className="card-body">
													<p className="card-text servicetext">{item.name}</p>
													<p className="card-text servicetext"> $ {item.price}</p>
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
							{/* This is where the onClick will be set for the selection of the package. */}
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
				<div className="my-5 text-center">
					<Button className="mx-3 " variant="light" size="lg">
						<Link to="/login">Proceed to Checkout</Link>
					</Button>
				</div>
			</div>
		);
	}
}
// onClick={() => {
// let { payload } = Session.get();
// Session.setPayload({ name: item.name, price: item.price });
// // let session = Session.get();
// alert(
// 	Session.get().payload.name +
// 		" " +
// 		Session.get().payload.price
// );
//<div key={index}
//onClick={() => actions.goToCheckout()}
//className="card col-12 my-4 servicecard2 card-click">
//<div className="card-body">
//	<p className="card-text servicetext">{item.name}</p>
//	<p className="card-text servicetext">{item.price}</p>
//</div>
//</div>
