import React from "react";
import "./actcontent.css";
import { useEffect } from "react";

const ActContent = () => {
	useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
	return (
		<div>
			<div className='actconwrapper'>
				<div className='actleft'>
					<div className='acthead1'>
						<h2>Distribution of Monthly Ration</h2>
					</div>
					<div className='actimg'>
						<img src='./images/at1.jpg' alt='' />
					</div>
				</div>

				<div className='actcontent'>
					<p>
						Life Foundation, an NGO dedicated to supporting underprivileged
						people, distributes monthly rations to provide essential food items
						and support to those in need. These rations may include staples like
						rice, flour, lentils, cooking oil, sugar, and other basic
						necessities. The aim is to alleviate food insecurity and provide
						sustenance to vulnerable communities. For monthly distribution of
						ration by the Life Foundation NGO, the organization define its
						objectives, identifies the target population, collects data to
						understand their socio-economic status. A ration distribution
						program is designed to determine the types and quantities of food
						items to be distributed, eligibility criteria, distribution
						mechanisms, and monitoring and evaluation strategies. For specific
						details on Life Foundation's ration distribution program, including
						eligibility criteria and distribution locations, it's best to
						contact them directly or visit their website.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ActContent;
