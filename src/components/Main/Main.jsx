import React, { useState, useEffect } from "react";
import "./main.css";
import "./responsive.css";
import Main2 from "./Main2";
import Main3 from "./Main3";
import Main4 from "./Main4";
import Main5 from "./Main5";

// image slider
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// typing animation
import { TypeAnimation } from "react-type-animation";

// animation on scroll
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import PostList from "../posts/PostList";

const Main = () => {
	const [showTypeAnimation, setShowTypeAnimation] = useState(false);
	const [isCarouselLoading, setIsCarouselLoading] = useState(true);

	useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });

		AOS.init();

		const carouselLoadingDelay = setTimeout(() => {
			setIsCarouselLoading(false);
		}, 1400); // Adjust the delay to see the loading container (in milliseconds)

		return () => {
			// clearTimeout(typeAnimationDelay);
			clearTimeout(carouselLoadingDelay);
		};
	}, []);

	return (
		<div>
			<div className='mainwrapper'>
				<div className='rightcont'>
					{isCarouselLoading && (
						<div className='carousel-loading'>
							<div>
								<p>l</p>
							</div>
						</div>
					)}
					<div style={{ display: isCarouselLoading ? "none" : "block" }}>
						<Carousel
							autoPlay={true}
							showThumbs={false}
							stopOnHover={true}
							infiniteLoop={true}
							showIndicators={true}
							showArrows={false}
							showStatus={false}
							width={1300}>
							<div className='carouselimg'>
								<img src='./images/slide1.jpg' alt='Slide 1' />
							</div>
							<div className='carouselimg'>
								<img src='./images/slide2.jpg' alt='Slide 2' />
							</div>
							<div className='carouselimg'>
								<img src='./images/slide3.jpg' alt='Slide 3' />
							</div>
						</Carousel>
					</div>
				</div>

				<div className='leftcont'>
					<>
						<h1
							className='herohead'
							data-aos='fade-down'
							data-aos-duration='1000'>
							Welcome to LIFE FOUNDATION
						</h1>
						<Link to='/donate' className='maindonateA'>
							<div className='maindonate'>DONATE NOW</div>
						</Link>
					</>
				</div>

				<div className='leftcont1'>
					<TypeAnimation
						className='typecont'
						sequence={[
							"Unite for a Better World",
							2000, // wait 2s before replacing
							"Empowering Change, One Step at a Time",
							2000,
							"Transforming Lives Through Compassion",
							2000,
						]}
						wrapper='span'
						speed={40}
						style={{ fontSize: "2em", display: "inline-block" }}
						repeat={Infinity}
						cursor={false}
					/>
				</div>
			</div>
			<Main2 />
			<Main3 />
			<Main4 />
			<PostList/>
			<Main5 />
		</div>
	);
};

export default Main;
