import React from "react";
import "./actcontent.css";
import { useEffect } from "react";

const Act5 = () => {
	useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
	return (
		<div>
			<div className='actconwrapper'>
				<div className='actleft'>
					<div className='acthead1'>
						<h2>Early Childhood Care & Education</h2>
					</div>
					<div className='actimg'>
						<img src='./images/at6.jpg' alt='' />
					</div>
				</div>

				<div className='actcontent'>
					<p>
                    Early Childhood Care and Education (ECCE) is a critical stage of development that lays the foundation for a child's lifelong learning, health, and well-being. Life Foundation, as an NGO dedicated to social welfare, undertakes various initiatives to support ECCE. This involves care of expecting mother in the pre-natal stage of child till its development up to 5 years of age. 
The NGO ensures that children have access to nutritious meals, healthcare services, and preventive care. This involve providing meals or snacks, facilitating health screenings, immunizations, and promoting healthy habits among children and families. Life Foundation is working for ECCE and it has a very good impact.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Act5;
