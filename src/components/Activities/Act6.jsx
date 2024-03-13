import React from "react";
import "./actcontent.css";
import { useEffect } from "react";

const Act6 = () => {
	

	useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
	return (
		<div>
			<div className='actconwrapper'>
				<div className='actleft'>
					<div className='acthead1'>
						<h2>A Helping Hand in Girls' Marriage</h2>
					</div>
					<div className='actimg'>
						<img src='./images/at7.jpg' alt='' />
					</div>
				</div>

				<div className='actcontent'>
					<p>
                    "Kanyadan" is a tradition where the father of the bride formally gives away his daughter in marriage to the groom. Life Foundation helps families who can’t afford the expenses of their daughter marriage as assisting poor families with a girl's marriage is a noble endeavor that can have a significant positive impact on the lives of individuals and communities.
Instead of perpetuating the practice of dowry, which can be financially burdensome for the bride's family, Life Foundation focuses on providing practical support that helps the couple establish their household. This could include household items, furniture, appliances, or monetary gifts that contribute to their future together.
By offering comprehensive support to poor families for a girl's marriage, we can help create a more inclusive and equitable society where every individual has the opportunity to celebrate significant life events with dignity and joy.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Act6;
