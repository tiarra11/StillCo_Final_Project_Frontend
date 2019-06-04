import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export class Checkout extends React.Component {
	render() {
		return (
			<div className="App">
				<h1>Checkout</h1>
				<h2>Items</h2>
				<p>Logo Design Order: $50000000</p>
				<p>Re-Branding Order: $60000</p>
				<p>Total: $500060000</p>
				<h2>Billing info</h2>
				<Link to="/confirmation">Place Order</Link>
			</div>
		);
	}
}
