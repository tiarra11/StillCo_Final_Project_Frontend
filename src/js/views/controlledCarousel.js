import React from "react";
import "../../styles/index.scss";
import Carousel from "react-bootstrap/Carousel";
import { Context } from "../store/appContext";

class ControlledCarousel extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleSelect = this.handleSelect.bind(this);

		this.state = {
			index: 0,
			direction: null
		};
	}

	handleSelect(selectedIndex, e) {
		this.setState({
			index: selectedIndex,
			direction: e.direction
		});
	}

	render() {
		const { index, direction } = this.state;

		return (
			<Context.Consumer>
				{({ store }) => {
					return (
						<Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect}>
							{/* This is the content for the first slide of the first Carousel called "Strategy". 
							The content is comprised of the tem (for image), and a caption (for the blurb of info)*/}
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={store.strategyCarousel[0].image}
									alt="First slide"
								/>
								<Carousel.Caption>
									<h3>{store.strategyCarousel[0].title}</h3>
									<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
									<button>{store.strategyCarousel[0].title}</button>
								</Carousel.Caption>
							</Carousel.Item>
							{/* This is the content for the first slide of the second Carousel. */}
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={store.strategyCarousel[1].image}
									alt="First slide"
								/>
								<Carousel.Caption>
									<h3>{store.strategyCarousel[1].title}</h3>
									<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={store.strategyCarousel[2].image}
									alt="First slide"
								/>
								<Carousel.Caption>
									<h3>{store.strategyCarousel[2].title}</h3>
									<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					);
				}}
			</Context.Consumer>
		);
	}
}

// render(<ControlledCarousel />);
export default ControlledCarousel;
