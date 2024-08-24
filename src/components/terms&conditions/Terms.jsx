import React from "react";
import "./terms.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Terms = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	
	useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	return (
		<div className='tccontain'>
			<div className='termshead'data-aos='fade-down' data-aos-duration='500'>
				<h1>Terms & Conditions</h1>
			</div>
			<div className='termscontent' data-aos='fade-up' data-aos-duration='500'>
				<h2>Introduction</h2>
				<p>
					Welcome to <span>Life Foundation</span>. By accessing or using our
					website, you agree to be bound by these terms and conditions. If you
					do not agree with any part of these terms, please do not use our
					website.
				</p>
				<h2>Use of Website</h2>
				<p>
					You agree to use our website for lawful purposes only and in a way
					that does not infringe the rights of, restrict, or inhibit anyone
					else's use and enjoyment of the website.
				</p>

				<h2>Donations</h2>
				<p>
					All donations made to Life Foundation are voluntary and
					non-refundable. We reserve the right to use the donations at our
					discretion to fulfill our mission and objectives.
				</p>
				<h2>Intellectual Property</h2>
				<p>
					All content on this website, including text, images, graphics, and
					logos, is the property of Life Foundation and is protected by
					intellectual property laws. Unauthorized use of any content is
					prohibited.
                </p>
                <h2>
                Limitation of Liability
                </h2>
                <p>
                Life Founadtion will not be liable for any direct, indirect, incidental, or consequential damages arising out of the use of our website.
                </p>
                <h2>
                Changes to Terms
                </h2>
                <p>
                We reserve the right to update or modify these terms and conditions at any time without prior notice. Your continued use of the website following any changes constitutes acceptance of those changes.
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

export default Terms;
