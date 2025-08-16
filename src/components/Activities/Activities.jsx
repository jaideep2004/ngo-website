import React from "react";
import { Link } from "react-router-dom";
import ActivityCard from "./ActivityCard";
import "./activities.css";
import projects from "../data/data";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Activities = () => {
	useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className='mainact'>
			<div className='acthead' data-aos='fade-down' data-aos-duration='500'>
				<h1>Our Projects</h1>
			</div>

			<div className='projectgrid'>
				{projects.map((project) => (
					<Link to={`/activity/${project.id}`} key={project.id}>
						<ActivityCard imgsrc={project.imgsrc} cardhead={project.cardhead} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Activities;
