import React from "react";
import "./about.css";
import ProjectCard from "../Main/ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
	useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div>
			<div className='aboutwrapper'>
				<div className='abouthead' data-aos='fade-down' data-aos-duration='500'>
					<h1>About Us</h1>
				</div>
				<div className='aboutwrapper1'>
					<div className='aboutleft1' data-aos='fade-right' data-aos-duration='500'>
						<div className='about1con' >
							<p >
								<b>LIFE FOUNDATION</b> is a non-Government, non-political,
								non-profit making organization engaged in the field of social
								development. It was founded by a group of like-minded social
								activists in the year 2014 and registered under the{" "}
								<b>Indian Trusts Registration Act,1882</b>, on{" "}
								<b>19th February 2014</b>. The organization is formed with a
								wider concept of the holistic and realistic development
								approach. our organization is working on some devoted issues of
								Education, Women & Child Development, Health & Nutrition,
								Environment, Education, Micro-enterprise promotion, Protection
								and Promotion of Rights of different vulnerable segments of the
								society, and Management of natural disasters and religious work.
							</p>
						</div>
					</div>

					<div className='aboutright1'>
						<div
							className='aboutpgimg'
							data-aos='fade-up'
							data-aos-duration='500'>
							<img src='./images/at4.jpg' alt='' />
						</div>
					</div>
				</div>

				<div className='aboutwrapper2'>
					<div className='aboutleft2'>
						<div className='aboutpgimg1' data-aos='fade-up'
							data-aos-duration='500'>
							<img src='./images/at5.jpg' alt='' />
						</div>
					</div>
					<div className='aboutright2' data-aos='fade-left' data-aos-duration='500'>
						<div className='about2con'>
							<p>
								So far, all the working years have been meaningful in achieving
								some milestones in the field of development with our own unique
								experience and expertise in implementing different development
								initiatives. This is only possible due to the hard work and
								commitment of our staff, volunteers, and other individuals (s)
								directly or indirectly associated with our mission. We are very
								much thankful to them and delighted to present our achievements
								and thoughts in a systematic manner in this small report.{" "}
								<b>LIFE FOUNDATION</b> believes that a participatory approach of
								development and community participation at the grassroots level
								is one of the keys to the success of our activities. We would
								never forget the felt support and positive attitude of the
								community towards our programmers, and at this juncture, we are
								also inviting them to come closer and extend their full
								cooperation in the development process that is meant for them.
								The financial constraint has always remained a barrier to shape
								up our dream. However, due to the support of our partners and
								members, we are marching toward our vision and mission in a
								collaborative approach. We wish their support would continue in
								the days ahead and also for supporting the stakeholders to
								witness a better tomorrow.
							</p>
						</div>
					</div>
				</div>
				<div className='vision'>
					<div
						className='abouthead2'
						data-aos='fade-up'
						data-aos-duration='800'>
						<h1>Our Mission</h1>
					</div>
					<div className='visioncon'>
						<div data-aos='fade-up' data-aos-duration='500'>
							<i class='fa-solid fa-users fa-beat fa-2xl'></i>
							To Work in areas of social, environmental, and economic justice,
							promote equity and equality, alleviate oppression, and enhance
							human health and well-being across local and global community
							systems.
						</div>
						<div data-aos='fade-up' data-aos-duration='600'>
							<i class='fa-regular fa-handshake fa-beat fa-2xl'></i>
							To enhance human well-being and help meet the basic human needs of
							all people, with particular attention to the needs and empowerment
							of people who are vulnerable, oppressed, and living in poverty.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
