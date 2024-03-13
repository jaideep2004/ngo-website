import React from "react";
import "./actcontent.css";
import { useEffect } from "react";

const Act3 = () => {
	useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
	return (
		<div>
			<div className='actconwrapper'>
				<div className='actleft'>
					<div className='acthead1'>
						<h2>Plantation Drive</h2>
					</div>
					<div className='actimg'>
						<img src='./images/at4.jpg' alt='' />
					</div>
				</div>

				<div className='actcontent'>
					<p>
                    Life Foundation's plantation drive is an initiative aimed at promoting environmental sustainability, biodiversity conservation, and community engagement. 
Life Foundation conducts an assessment to identify areas in need of reforestation, afforestation, or greening efforts. This include urban areas with low green cover, degraded lands, or ecologically sensitive regions. Suitable sites for plantation activities are identified based on factors such as soil type, water availability, and ecological significance. Plantation events are organized where volunteers, including community members, students, and corporate groups, come together to plant trees in different areas of Punjab. 
The NGO selects native or appropriate tree species that are well-suited to the local climate, soil conditions, and ecosystem needs. Consideration is given to factors such as biodiversity enhancement, soil stabilization, and economic benefits to local communities.
Through these efforts, Life Foundation contributes to environmental sustainability and community development by mobilizing resources and engaging communities in tree planting and conservation efforts.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Act3;
