import React from "react";
import "./main.css";
import './responsive.css'
import Main2 from "./Main2";
import Main3 from "./Main3";

//image slider
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

//typing anmation
import { TypeAnimation } from "react-type-animation";
import Main4 from "./Main4";
import Main5 from "./Main5";

import {useState, useEffect } from "react";

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
				<div className='leftcont'  data-aos='fade-right'  data-aos-duration="500" >
					<div className='typeanimate'>
						<div className='lefthead'>
							<div className='lefthead1'>Welcome to</div>
							<div className='lefthead2'>LIFE FOUNDATION (NGO)</div>
						</div>
						{loading && <TypeAnimation
							className='typeanimate2'
							sequence={[
								// Same substring at the start will only be typed out once, initially
								"Empowering Change One Step at a Time",
								2000,
								"Unite for a Better World",
								2000,
							]}
							repeat={Infinity}
							speed={50}
							cursor={false}
						/>}
						
					</div>
				</div>

				<div className='rightcont'>
					<Carousel
						className='rightcont1'
						autoPlay={true}
						showThumbs={false}
						stopOnHover={true}
						infiniteLoop={true}
						showIndicators={false}
						showArrows={false}
						showStatus={false}
						width={760}
					>
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
