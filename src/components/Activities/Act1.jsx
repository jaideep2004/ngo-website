import React from "react";
import "./actcontent.css";
import { useEffect } from "react";

const Act1 = () => {

	useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
	return (
		<div>
			<div className='actconwrapper'>
				<div className='actleft'>
					<div className='acthead1'>
						<h2>Blanket Distribution Activity</h2>
					</div>
					<div className='actimg'>
						<img src='./images/at2.jpg' alt='' />
					</div>
				</div>

				<div className='actcontent'>
					<p>
						The blanket distribution activity conducted by Life Foundation NGO
						involves providing blankets to individuals or families in need,
						particularly during cold weather or in regions where access to
						adequate shelter or heating is limited. Life Foundation organizes
						blanket collection drives through various channels such as community
						events, workplaces, and online campaigns. They set up collection
						points where people can drop off donated blankets. Donated blankets
						are inspected to ensure they meet quality standards. If necessary,
						blankets may be cleaned or repaired before distribution to ensure
						they are in good condition. Blankets are distributed to needy
						individuals or families at organized distribution events. Volunteers
						or staff members oversee the distribution process to ensure fairness
						and efficiency. Life Foundation maintains transparency by providing
						donors and stakeholders with updates on the campaign's progress and
						outcomes. This may include reports detailing the number of blankets
						donated, distributed, and the communities served. For sustainability
						and long term support Life Foundation implements programs aimed at
						addressing underlying causes of poverty and vulnerability. By
						following these steps, Life Foundation ensures that its blanket
						donation campaign effectively reaches and benefits those in need,
						providing warmth and comfort during challenging times.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Act1;
