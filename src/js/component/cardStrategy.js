import React from "react";
import "../../styles/index.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { SingleService } from "../views/singleService";

export class CardStrategy extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, action }) => {
					return store.strategyCardContent.map((item, index) => {
						return (
							<Link to={"/single-service/" + index} key={{ index }} style={{ width: "30%" }}>
								<div className="card text-white">
									<img
										className="card-img-top"
										src="https://images.unsplash.com/photo-1535954741680-a2e24eb05418?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2558&q=80"
										alt="Card image cap"
									/>
									<div className="card-img-overlay">
										<div className="dark-transparent ">
											<h5 className="card-title text-center">{item.title}</h5>
											<p className="card-text">{item.info}</p>
										</div>
									</div>
								</div>
							</Link>
						);
					});
				}}
			</Context.Consumer>
		);
	}
}
SingleService.propTypes = {
	match: PropTypes.object
};
