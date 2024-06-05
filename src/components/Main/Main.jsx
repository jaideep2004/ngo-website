import React from "react";
import "./main.css";
import "./responsive.css";
import Main2 from "./Main2";
import Main3 from "./Main3";

//image slider
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

//typing anmation
import { TypeAnimation } from "react-type-animation";
import Main4 from "./Main4";
import Main5 from "./Main5";

import { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
	useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	useEffect(() => {
		AOS.init();
	}, []);

	//delay type animation
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setLoading(true);
		}, 2500);
	}, []);

	return (
		<div>
			<div className='mainwrapper'>
				<div className='leftcont'>
					<h1
						className='herohead'
						data-aos='fade-down'
						data-aos-duration='1000'>
						Welcome to LIFE FOUNDATION
					</h1>
					
					<div className='maindonate'>DONATE</div>
				</div>
				<div className="leftcont1">
				<TypeAnimation
						
						className="typecont"
						sequence={[
							
							"Unite for a Better World",
							2000, // wait 1s before replacing "Mice" with "Hamsters"
							"Empowering Change, One Step at a Time",
							2000,
							"Transforming Lives Through Compassion ",
							2000,
						]}
						wrapper='span'
						speed={40}
						style={{ fontSize: "2em", display: "inline-block" }}
						repeat={Infinity}
						cursor={false}
					/>
				</div>

				<div className='rightcont'>
					<Carousel
						autoPlay={true}
						showThumbs={false}
						stopOnHover={true}
						infiniteLoop={true}
						showIndicators={true}
						showArrows={false}
						showStatus={false}
						width={1250}>
						<div className='carouselimg'>
							<img src='./images/slide1.jpg' />
						</div>
						<div className='carouselimg'>
							<img src='./images/slide2.jpg' />
						</div>
						<div className='carouselimg'>
							<img src='./images/slide3.jpg' />
						</div>
					</Carousel>
				</div>
				{/* <div className="bgcont"></div> */}
			</div>
			<Main2 />
			<Main3 />
			<Main4 />
			<Main5 />
		</div>
	);
};

export default Main;
