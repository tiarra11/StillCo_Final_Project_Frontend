import React from "react";

export class Still extends React.Component {
	clicked = false;

	unhide(e) {
		document.querySelector("#aver").style.visibility = "visible";

		e.target.style.cursor = "pointer";
	}

	// hide(e) {
	// 	let
	// }

	render() {
		return (
			<div className="container bg-transparent mt-5">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDoteB8PiLzD6iehnMXHJsAH9aMIoxw2VTn0Zm_t4mEe8z6Hy5Eg"
					className="rounded float-right imgshadow"
					alt="..."
				/>

				<div className="row">
					<div className="col-md-12 text-center still">
						<span
							onMouseOver={this.unhide}
							onMouseOut={() => {
								if (!this.clicked) document.querySelector("#aver").style.visibility = "hidden";
							}}
							onClick={() => {
								let arr = document.querySelectorAll(".hide");
								for (let e of arr) {
									e.style.visibility = "visible";
								}
								this.clicked = true;
							}}>
							sTill
						</span>
					</div>

					<div id="aver" className="hide col-md-12  text-center">
						Collective
					</div>
				</div>

				<div className="hide row text d-flex justify-content-center">
					<div className="text">Digital</div>
				</div>

				<div className="hide row text d-flex justify-content-center ml-7">
					<div className="col-2" />
					<div className="col-3">Strategy</div>
					<div className="col-3">Identity</div>
					<div className="col-3">Marketing</div>
					<div className="col-0" />
				</div>

				{/*
					<p className="verticaltext">some text</p>

				<div className="col-md d-flex justify-content-center">
					<div className="backgrounddiv" />
				</div>*/}
			</div>
		);
	}
}
