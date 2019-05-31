import React from "react";

export class Still extends React.Component {
	render() {
		return (
			<div className="container bg-transparent mt-5">
				<div className="row">
					<div className="col-md-12 text-center still">sTill</div>

					<div className="col-md-12  text-center">Collective</div>
				</div>

				<div className="row text d-flex justify-content-center">
					<div className="text">Digital</div>
				</div>
				<div className="row text d-flex justify-content-center ml-7">
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
