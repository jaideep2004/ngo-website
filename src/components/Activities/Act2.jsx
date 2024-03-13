import React from "react";
import "./actcontent.css";
import { useEffect } from "react";

const Act2 = () => {
	useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
	return (
		<div>
			<div className='actconwrapper'>
				<div className='actleft'>
					<div className='acthead1'>
						<h2>Periodic Distribution of Cooked Food <h5>(Especially During Covid)</h5></h2>
					</div>
					<div className='actimg'>
						<img src='./images/at3.jpg' alt='' />
					</div>
				</div>

				<div className='actcontent'>
					<p>
                    Life Foundation's periodic distribution of cooked food, especially during the COVID-19 pandemic, involved a comprehensive approach to address food insecurity and support vulnerable communities.
Strict hygiene protocols were followed during food preparation, handling, and distribution to ensure the safety of recipients. This included adherence to food safety regulations, proper sanitation practices, and personal protective equipment for staff and volunteers. Life Foundation established distribution channels to reach target communities effectively. This involved setting up food distribution centers, mobile kitchens, meal delivery services, or partnering with existing food distribution networks. 
The NGO adapts the food distribution program as needed based on evolving needs, feedback from stakeholders, and changing circumstances related to the pandemic. They may also explore strategies to ensure the sustainability of the initiative beyond the immediate crisis period.
Through these efforts, Life Foundation provides essential support to vulnerable communities by addressing food insecurity and ensuring access to nutritious meals during the COVID-19 pandemic and beyond.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Act2;
