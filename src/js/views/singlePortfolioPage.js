import React from "react";
import "../../styles/index.scss";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export class SinglePortfolioPage extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, action }) => {
					let index = this.props.match.params.theindex;
					console.log(index);
					return (
						<div className="container">
							<div className="row">
								<div className="col-md-6 m-auto">
									<h1>{store.strategy[index].title}</h1>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6 m-auto">{store.strategy[index].description}</div>
							</div>
							<div className="row">
								<div className="col-md-6 m-auto">
									<button type="button" className="btn btn-info">
										{store.strategy[index].price}
									</button>
									<p>{store.strategy[index].description}</p>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
SinglePortfolioPage.propTypes = {
	match: PropTypes.object
};
