import React from "react";
import "./actcontent.css";
import { useEffect } from "react";

const Act4 = () => {
	useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
	return (
		<div>
			<div className='actconwrapper'>
				<div className='actleft'>
					<div className='acthead1'>
						<h2>Child Rights</h2>
					</div>
					<div className='actimg'>
						<img src='./images/at5.jpg' alt='' />
					</div>
				</div>

				<div className='actcontent'>
					<p>
                    Life Foundation, as an NGO dedicated to social welfare, undertakes various initiatives to promote and protect child rights.
Life Foundation conducts campaigns and workshops to raise awareness about child rights among communities, parents, teachers, and other stakeholders. These efforts aim to educate people about the importance of protecting children from exploitation, abuse, and neglect. Life Foundation provides support and assistance to children who are victims of abuse, exploitation, or trafficking. The NGO advocates for the implementation and enforcement of laws and policies that safeguard child rights at local, national, and international levels. The NGO works to eliminate child labor by raising awareness about its harmful effects, providing alternative livelihood opportunities for families, and advocating for the enforcement of laws prohibiting child labor.
Through these efforts, Life Foundation contributes to the well-being and development of young children, laying the foundation for their future success and contributing to positive social and economic outcomes for communities.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Act4;
