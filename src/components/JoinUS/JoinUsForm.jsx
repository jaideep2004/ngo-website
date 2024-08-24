import React, { useState } from "react";
import "./joinus.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JoinUsForm = () => {
	useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	useEffect(() => {
		AOS.init();
	}, []);

	//email
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_9mu97mo", "template_nmflire", form.current, {
				publicKey: "ByY67qallsZ4slKux",
			})
			.then(
				() => {
					console.log("SUCCESS!");
					toast.success("Email Sent!");
					e.target.reset();
				},
				(error) => {
					console.log("FAILED...", error.text);
					toast.error("Failed to send email!");
				}
			);
	};

	return (
		<div className='mainjoinuswrap'>
			<ToastContainer/>
			<div className='joinhead' data-aos='fade-down' data-aos-duration='500'>
				<h1>Join Us</h1>
				<h2>Get Involved and Help Transform Lives Today</h2>
			</div>

			<form
				className='joinform'
				data-aos='fade-up'
				data-aos-duration='500'
				ref={form}
				onSubmit={sendEmail}>
				<div className='formdiv'>
					<label htmlFor='name'>Name</label>

					<input type='text' id='name' name='user_name' required />
				</div>

				<div className='formdiv'>
					<label htmlFor='email'>Email</label>
					<input type='email' id='email' name='user_email' required />
				</div>

				<div className='formdiv'>
					<label htmlFor='dob'>Date of Birth</label>

					<input
						type='date'
						id='dob'
						name='dob'
						placeholder='DD/MM/YYYY'
						required
					/>
				</div>

				<div className='formdiv'>
					<label htmlFor='mobile'>Mobile No</label>
					<input
						type='tel'
						id='mobile'
						name='mobile'
						placeholder='e.g., 1234567890'
						required
						maxLength={10}
					/>
				</div>

				<div className='formdiv'>
					<label htmlFor='message'>Message</label>
					<textarea id='message' name='message' required></textarea>
				</div>
				<div className='formdiv'>
					<label htmlFor='message'></label>
					<div className='formbtn'>
						<button type='submit'>Submit</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default JoinUsForm;
