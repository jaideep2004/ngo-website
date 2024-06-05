import React from "react";
import "./gallery.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
	useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className='gallerywrap'>
			<div className='galleryhead' data-aos='fade-down' data-aos-duration='500'>
				<h1>Gallery</h1>
			</div>
			<div className='gallerywrap1' data-aos='fade-up' data-aos-duration='500'>
				<img src='./images/at1.jpg' alt='' />
				<img src='./images/at2.jpg' alt='' />
				<img src='./images/at3.jpg' alt='' />
				<img src='./images/at4.jpg' alt='' />
				<img src='./images/at5.jpg' alt='' />
				<img src='./images/at6.jpg' alt='' />
				<img src='./images/at7.jpg' alt='' />
			</div>
		</div>
	);
};

export default Gallery;
