import React from "react";
import { useParams } from "react-router-dom";
import "./activities.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ActivityContent = ({ projects }) => {
	useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	useEffect(() => {
		AOS.init();
	}, []);

	const { id } = useParams();
	const project = projects.find((p) => p.id === parseInt(id));

	if (!project) {
		return <div>Project not found</div>;
	}

	console.log("Project:", project);

	const imageSrc = `/${project.imgsrc}`;

	const cardheadParts = project.cardhead.split("(");
	const mainPart = cardheadParts[0].trim(); // Main part before the bracket
	const bracketPart = cardheadParts[1] ? `(${cardheadParts[1]}` : ""; // Bracket part (if exists)

	return (
		<div className='actwrapper'>
			<div className='actwrapper1'>
				<div className='actconhead'>
					<h2>{mainPart}</h2>
					<h5>{bracketPart}</h5>
				</div>
				<div className='actconimg'>
					<img src={imageSrc} alt={project.cardhead} />
				</div>
			</div>

			<div className='actcondesc'>
				<p>{project.description}</p>
			</div>
		</div>
	);
};

export default ActivityContent;
