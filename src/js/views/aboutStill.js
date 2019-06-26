import React from "react";

export class Still extends React.Component {
	isItClicked = "not yet";

	unhide(e) {
		document.querySelector("#collective").style.visibility = "visible";

		e.target.style.cursor = "pointer";
	}

	render() {
		return (
			<div>
				<div className="container bg-transparent mt-5">
					{/* <img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDoteB8PiLzD6iehnMXHJsAH9aMIoxw2VTn0Zm_t4mEe8z6Hy5Eg"
					className="rounded float-right imgshadow"
					alt="..."
				/> */}

					<div className="row">
						<div className="stillLogo col-md-12 text-center mb-5">
							<span
								onMouseOver={this.unhide}
								onMouseOut={() => {
									if (this.isItClicked === "not yet") {
										document.querySelector("#collective").style.visibility = "hidden";
									}
								}}
								onClick={() => {
									this.isItClicked = "now it is";

									let arr = document.querySelectorAll(".hide");
									for (let e of arr) {
										e.style.visibility = "visible";
									}
								}}>
								<span className="sPositioning">s</span>
								<span className="stillT">T</span>
								<span className="illpositioning">ill</span>
							</span>
						</div>

						<div id="collective" className="col-md-12 pt-1 pb-5 text-center elegantshadow fadein">
							C O L L E C T I V E
						</div>
					</div>

					<div className="fadein SIM text SIM">
						<div className="row">
							<div className="col-sm text-center">STRATEGY</div>
							<div className="col-sm text-center">IDENTITY</div>
							<div className="col-sm text-center">MARKETING</div>
						</div>
					</div>
					{/*
					<p className="verticaltext">some text</p>

				<div className="col-md d-flex justify-content-center">
					<div className="backgrounddiv" />
				</div>*/}
					<div className="container-fluid pt-5">
						<div className="row">
							<div className="fadein col-md-12 text-center about m-auto">
								<div className="aboutus">
									STill &amp; Co wants to give you the sTill experience your brand needs. We have a
									small team of creative artists that will expand your brand to a savvy company.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
