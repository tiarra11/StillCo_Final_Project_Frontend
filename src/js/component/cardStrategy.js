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
							<div className="card text-white" key={{ index }}>
								<img
									className="card-img-top"
									src="https://images.unsplash.com/photo-1558810629-dcdb3f924dbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=664&q=80"
									alt="Card image cap"
								/>
								<div className="card-img-overlay">
									<div className="dark-transparent">
										<h5 className="card-title">{item.title}</h5>
										<p className="card-text">{item.info}</p>
										<Link to={"/single-service/" + index}>
											<button type="button" className="btn btn-info">
												Details
											</button>
										</Link>
									</div>
								</div>
							</div>
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
