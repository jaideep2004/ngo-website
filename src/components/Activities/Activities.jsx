// Activities.js
import React from "react";
import { Link } from "react-router-dom";
import ActivityCard from "./ActivityCard";
import "./actcontent.css";
import "./activities.css";

const Activities = () => {
	const projects = [
		{
			id: 1,
			imgsrc: "./images/at1.jpg",
			cardhead: "Blanket Distribution Activity",
			
		},
		{
			id: 2,
			imgsrc: "./images/at2.jpg",
			cardhead: "Plantation Drive",
			
		},
		{
			id: 3,
			imgsrc: "./images/at2.jpg",
			cardhead: "Periodic Distribution of Cooked Food(Especially During Covid)",
			
		},
		{
			id: 4,
			imgsrc: "./images/at2.jpg",
			cardhead: "Periodic Distribution of Cooked Food(Especially During Covid)",
			
		},
		{
			id: 5,
			imgsrc: "./images/at2.jpg",
			cardhead: "Periodic Distribution of Cooked Food ",
			
		},
		{
			id: 6,
			imgsrc: "./images/at2.jpg",
			cardhead: "Periodic Distribution of Cooked Food(Especially During Covid)",
			
		},
		
	];

	return (
		<div className='mainact'>
			<h1 className='acthead'>Activities</h1>
			<div className='project-grid'>
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
