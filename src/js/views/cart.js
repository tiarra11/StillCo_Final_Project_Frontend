import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export class Cart extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<div className="card shopping-cart">
								<div className="card-header bg-dark text-light">
									<i className="fa fa-shopping-cart" aria-hidden="true" />
									Shipping cart
									<a href className="btn btn-outline-info btn-sm pull-right">
										Continiu shopping
									</a>
									<div className="clearfix" />
								</div>
								<div className="card-body">
									{/* PRODUCT */}
									<div className="row">
										<div className="col-12 col-sm-12 col-md-2 text-center">
											<img
												className="img-responsive"
												src="http://placehold.it/120x80"
												alt="prewiew"
												width={120}
												height={80}
											/>
										</div>
										<div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
											<h4 className="product-name">
												<strong>Product Name</strong>
											</h4>
											<h4>
												<small>Product description</small>
											</h4>
										</div>
										<div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
											<div
												className="col-3 col-sm-3 col-md-6 text-md-right"
												style={{ paddingTop: "5px" }}>
												<h6>
													<strong>
														25.00 <span className="text-muted">x</span>
													</strong>
												</h6>
											</div>
											<div className="col-4 col-sm-4 col-md-4">
												<div className="quantity">
													<input type="button" defaultValue="+" className="plus" />
													<input
														type="number"
														step={1}
														max={99}
														min={1}
														defaultValue={1}
														title="Qty"
														className="qty"
														size={4}
													/>
													<input type="button" defaultValue="-" className="minus" />
												</div>
											</div>
											<div className="col-2 col-sm-2 col-md-2 text-right">
												<button type="button" className="btn btn-outline-danger btn-xs">
													<i className="fa fa-trash" aria-hidden="true" />
												</button>
											</div>
										</div>
									</div>
									<hr />
									{/* END PRODUCT */}
									{/* PRODUCT */}
									<div className="row">
										<div className="col-12 col-sm-12 col-md-2 text-center">
											<img
												className="img-responsive"
												src="http://placehold.it/120x80"
												alt="prewiew"
												width={120}
												height={80}
											/>
										</div>
										<div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
											<h4 className="product-name">
												<strong>Product Name</strong>
											</h4>
											<h4>
												<small>Product description</small>
											</h4>
										</div>
										<div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
											<div
												className="col-3 col-sm-3 col-md-6 text-md-right"
												style={{ paddingTop: "5px" }}>
												<h6>
													<strong>
														25.00 <span className="text-muted">x</span>
													</strong>
												</h6>
											</div>
											<div className="col-4 col-sm-4 col-md-4">
												<div className="quantity">
													<input type="button" defaultValue="+" className="plus" />
													<input
														type="number"
														step={1}
														max={99}
														min={1}
														defaultValue={1}
														title="Qty"
														className="qty"
														size={4}
													/>
													<input type="button" defaultValue="-" className="minus" />
												</div>
											</div>
											<div className="col-2 col-sm-2 col-md-2 text-right">
												<button type="button" className="btn btn-outline-danger btn-xs">
													<i className="fa fa-trash" aria-hidden="true" />
												</button>
											</div>
										</div>
									</div>
									<hr />
									{/* END PRODUCT */}
									<div className="pull-right">
										<a href className="btn btn-outline-secondary pull-right">
											Update shopping cart
										</a>
									</div>
								</div>
								<div className="card-footer">
									<div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
										<div className="row">
											<div className="col-6">
												<input type="text" className="form-control" placeholder="cupone code" />
											</div>
											<div className="col-6">
												<input
													type="submit"
													className="btn btn-default"
													defaultValue="Use cupone"
												/>
											</div>
										</div>
									</div>
									<div className="pull-right" style={{ margin: "10px" }}>
										<a href className="btn btn-success pull-right">
											Checkout
										</a>
										<div className="pull-right" style={{ margin: "5px" }}>
											Total price: <b>50.00€</b>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
