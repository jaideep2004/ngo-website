import React from "react";
import "./terms.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Refund = () => {
	useEffect(() => {
		AOS.init();
    }, []);
    
	useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	return (
		<div className='tccontain'>
			<div className='termshead' data-aos='fade-down' data-aos-duration='500'>
				<h1>Refund Policy</h1>
			</div>
			<div className='termscontent' data-aos='fade-up' data-aos-duration='500'>
				<h2>Donations</h2>
				<p>
					Donations made to Life Foundation are generally non-refundable.
					However, if you made an error in your donation or change your mind
					within 14 days of making the donation, please contact us at{" "}
					<span>lifefoundhelp@gmail.com </span> to request a refund. Refunds are
					granted at the discretion of Life Foundation.
				</p>
				<h2>Changes to Policy</h2>
				<p>
					We reserve the right to update or modify this cancellation and refund
					policy at any time. Any changes will be posted on this page.
				</p>

				<h2>Contact Information</h2>
				<p>
					If you have any questions about these terms and conditions, please
					contact us at <span> lifefoundhelp@gmail.com</span> .
				</p>
			</div>
		</div>
	);
};

export default Refund;
