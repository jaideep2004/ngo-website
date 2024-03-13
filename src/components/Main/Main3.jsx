import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectCard from "./ProjectCard";

const Main3 = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3, // Display three slides at once
		slidesToScroll: 1,
		autoplay: true, // Enable autoplay
		autoplaySpeed: 2500,
	};
	return (
		<div>
			<div className='main3wrapper'>
				<div className='main3head'>
					<h3 data-aos='fade-right'>What We Are Doing</h3>
					<h2 data-aos='zoom-in-up' data-aos-duration='1000'>
						We Are On A Mission To Help The Helpless
					</h2>
				</div>

				<div className='main3con'>
					<Slider {...settings}>
						
						<ProjectCard
							imgsrc='././images/at1.jpg'
							cardhead='Distribution of Monthly Ration'
						/>
						<ProjectCard
							imgsrc='././images/at2.jpg'
							cardhead='Blanket Distribution Activity'
						/>
						<ProjectCard
							imgsrc='././images/at3.jpg'
							cardhead='Distribution Of Cooked Food'
						/>
						<ProjectCard
							imgsrc='././images/at4.jpg'
							cardhead='Plantation '
						/>
						<ProjectCard
							imgsrc='././images/at5.jpg'
							cardhead='Child Rights'
						/>
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default Main3;
