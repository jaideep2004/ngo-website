import React from "react";
import "./terms.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Privacy = () => {

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
				<h1>Privacy Policy</h1>
			</div>
			<div className='termscontent' data-aos='fade-up' data-aos-duration='500'>
				<h2>Introduction</h2>
				<p>
                Life Foundation is committed to protecting your privacy. This privacy policy outlines how we collect, use, and protect your personal information.
				</p>
				<h2>Information We Collect</h2>
				<p>
                We may collect personal information such as your name, email address, phone number, and payment details when you make a donation .
				</p>

				<h2>How We Use Your Information</h2>
				<p>
                We use your personal information to process donations, send newsletters, and improve our services. We do not sell or share your information with third parties except as required by law.
				</p>
				<h2>Security</h2>
				<p>
                We take reasonable measures to protect your personal information from unauthorized access, alteration, or destruction.
                </p>
               
                <h2>
                Contact Information
                </h2>
                <p>
                    If you have any questions about these terms and conditions, please contact us at <span> lifefoundhelp@gmail.com</span>   .
                </p>
			</div>
		</div>
	);
};

export default Privacy;
