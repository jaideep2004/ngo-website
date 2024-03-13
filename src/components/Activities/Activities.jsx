import React from "react";
import "./activities.css";
import { Outlet, useNavigate, Link } from "react-router-dom";
import ProjectCard from "../Main/ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Activities = () => {
	useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);
	
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div>
			<div className='actwrapper'>
				<div className='acthead' data-aos='fade-down' data-aos-duration='500'>
					<h1>Projects</h1>
				</div>
				<div className='actcon'>
					<Link to='/actcontent'>
						<ProjectCard
							imgsrc='./images/at1.jpg'
							cardhead='Distribution of Monthly Ration'
						/>
					</Link>
					<Link to='/act1'>
						<ProjectCard
							imgsrc='./images/at2.jpg'
							cardhead='Blanket Distribution Activity'
						/>
					</Link>
					<Link to="/act2">
						<ProjectCard
							imgsrc='./images/at3.jpg'
							cardhead='Distribution Of Cooked Food'
						/>
					</Link>
					<Link to="/act3">
						<ProjectCard imgsrc='./images/at4.jpg' cardhead='Plantation ' />
					</Link>
					<Link to="/act4">
						<ProjectCard imgsrc='./images/at5.jpg' cardhead='Child Rights' />
					</Link>
					<Link to="/act5">
						<ProjectCard imgsrc='./images/at6.jpg' cardhead='Early Childhood Care & Education' />
					</Link>
					<Link to="/act6">
						<ProjectCard imgsrc='./images/at7.jpg' cardhead="A Helping Hand in Girls' Marriage" />
					</Link>
				</div>
			</div>
			<Outlet />
		</div>
	);
};

export default Activities;
