import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Main2 = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div>
			<div className='main2wrapper'>
				<div className='main2left' data-aos='fade-right'  data-aos-duration="1000">
					<div className='aboutimg'>
						<img src='./images/about1.jpg' alt='' />
					</div>
				</div>
				<div className='main2right'>
					<div className='abouthead'>
						<h2>About Us</h2></div>
					<p data-aos='fade-up'  data-aos-duration="1000">
						LIFE Foundation is a non-Government, non-political, non-profit
						making organization engaged in the field of social development. It
						was founded by a group of like-minded social activists in the year
						2014 and registered under the Indian Trusts Registration Act, 1882,
						on 19th February 2014. The organization is formed with a wider
						concept of the holistic and realistic development approach. our
						organization is working on some devoted issues of Education, women
						and child development, Health & Nutrition, environment, education,
						micro-enterprise promotion, protection and promotion of rights of
						different vulnerable segments of the society, and management of
						natural disasters and religious work... 
                    </p>
                    <div className="learnbtn">Learn More</div>
				</div>
			</div>
			
		</div>
	);
};

export default Main2;
