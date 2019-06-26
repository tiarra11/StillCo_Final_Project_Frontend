import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
class Navbar extends React.Component {
	render() {
		let path = window.location.pathname;

		return (
			<nav className="navbar navbar-expand-md navbar-light">
				<div
					className={path == "/" ? "fadein navbar-collapse collapse" : "navbar-collapse collapse"}
					id="collapsingNavbar">
					<ul className="navbar-nav">
						<li className="nav-item mr-4">
							<Link to="/" className="stillLogoNav">
								<div>
									<span id="still_sNav">s</span>
									<span id="still_TNav">T</span>
									<span id="still_illNav">ill</span>
								</div>
							</Link>
						</li>
					</ul>
					<ul className="navbar-nav ml-auto logged">
						<li className="nav-item mr-4">
							<Link to="/portfolio" className="navbarlink">
								<div>
									<span id="portfolio_porNav">Por</span>
									<span id="portfolio_TNav">T</span>
									<span id="portfolio_folioNav">folio</span>
								</div>
							</Link>
						</li>
						<li className="nav-item mr-4">
							<Link to="/Services" className="navbarlink">
								Services
							</Link>
						</li>
						<Context.Consumer>
							{({ store, actions }) => (
								<li className="nav-item mr-5">
									{!store.token ? (
										<Link to="/login" className="navbarlink">
											<div>
												<span id="collective_collecNav">The Collec</span>
												<span id="collective_TNav">T</span>
												<span id="collective_iveNav">ive </span>
												<span id="collective_loginNav"> Login</span>
											</div>
										</Link>
									) : (
										<span
											className="navbarlink"
											onClick={() => {
												actions.logoutClient(
													store.tempLoggedUser.client_id,
													this.props.history
												);
											}}
											id="collective_logoutNav">
											Logout
										</span>
									)}
								</li>
							)}
						</Context.Consumer>
					</ul>
				</div>
			</nav>
		);
	}
}

export default withRouter(Navbar);

Navbar.propTypes = {
	history: PropTypes.object
};
