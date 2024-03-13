import React from "react";
import "./donate.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const DonationPage = () => {

	useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);
	
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div>
			<div className='donatewrapper'>
				<div
					className='donatehead'
					data-aos='fade-down'
					data-aos-duration='500'>
					<h1> Transform Lives with Your Donation</h1>
				</div>

				<div className='donateform'>
					<div className='joinuswrapper'>
						<form className='joinform'>
							<div className='formdiv'>
								<div>
									<label htmlFor='name'>Name:</label>
								</div>
								<input type='text' id='name' name='name' required />
							</div>

							<div className='formdiv'>
								<div>
									<label htmlFor='name'>Email:</label>
								</div>
								<input type='email' id='email' name='email' required />
							</div>

							<div className='formdiv'>
								<div>
									<label htmlFor='name'>Mobile No:</label>
								</div>
								<input
									type='tel'
									id='mobile'
									name='mobile'
									placeholder='e.g., 1234567890'
									required
								/>
							</div>

							<div className='formbtn'>
								<button type='submit'>Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DonationPage;
