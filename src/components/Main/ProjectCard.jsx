import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProjectCard = (props) => {
	useEffect(() => {
		AOS.init();
	}, []);

	const { imgsrc, cardhead } = props;
	return (
		<div className='contcard' data-aos='fade-up' data-aos-duration='500'>
			<img src={imgsrc} alt='' />
			<div className='cardhead'>{cardhead}</div>

			<div className='readbtn'>Read More</div>
		</div>
	);
};

export default ProjectCard;
