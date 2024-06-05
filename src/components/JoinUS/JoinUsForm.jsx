import React, { useState } from "react";
import "./joinus.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const JoinUsForm = () => {
	useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	useEffect(() => {
		AOS.init();
	}, []);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		dob: "",
		mobile: "",
		message: "",
	});

	const [errors, setErrors] = useState({
		dob: "",
		mobile: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));

		// Clear validation errors when the user starts typing
		setErrors((prevErrors) => ({
			...prevErrors,
			[name]: "",
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validate date of birth (simple pattern for DD/MM/YYYY format)
		const dobPattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
		if (!dobPattern.test(formData.dob)) {
			setErrors((prevErrors) => ({
				...prevErrors,
				dob: "Please enter a valid date of birth (DD/MM/YYYY).",
			}));
			return;
		}

		// Validate mobile number (simple pattern for 10-digit US phone number)
		const mobilePattern = /^\d{10}$/;
		if (!mobilePattern.test(formData.mobile)) {
			setErrors((prevErrors) => ({
				...prevErrors,
				mobile: "Please enter a valid 10-digit mobile number.",
			}));
			return;
		}

		// Handle form submission logic (you can send data to a server or perform any other actions)
		console.log("Form submitted:", formData);

		// Reset form after submission
		setFormData({
			name: "",
			email: "",
			dob: "",
			mobile: "",
			message: "",
		});

		// Clear validation errors after successful submission
		setErrors({
			dob: "",
			mobile: "",
		});
	};

	return (
		<div>
			<div className='joinhead' data-aos='fade-down' data-aos-duration='500'>
				<h1>Join Us</h1>
			</div>

			<div className='joinuswrapper' data-aos='fade-up' data-aos-duration='500'>
				<form onSubmit={handleSubmit} className='joinform'>
					<div className='formdiv'>
						<div>
							<label htmlFor='name'>Name:</label>
						</div>

						<input
							type='text'
							id='name'
							name='name'
							value={formData.name}
							onChange={handleChange}
							required
						/>
					</div>

					<div className='formdiv'>
						<div>
							<label htmlFor='email'>Email:</label>
						</div>
						<input
							type='email'
							id='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>

					<div className='formdiv'>
						<div>
							<label htmlFor='dob'>Date of Birth:</label>
						</div>
						<input
							type='text'
							id='dob'
							name='dob'
							placeholder='DD/MM/YYYY'
							value={formData.dob}
							onChange={handleChange}
							required
						/>
						<span className='error'>{errors.dob}</span>
					</div>

					<div className='formdiv'>
						<div>
							<label htmlFor='mobile'>Mobile No:</label>
						</div>
						<input
							type='tel'
							id='mobile'
							name='mobile'
							placeholder='e.g., 1234567890'
							value={formData.mobile}
							onChange={handleChange}
							required
						/>
						<span className='error'>{errors.mobile}</span>
					</div>

					<div className='formdiv'>
						<div>
							<label htmlFor='message'>Message:</label>
						</div>
						<textarea
							id='message'
							name='message'
							value={formData.message}
							onChange={handleChange}
							required></textarea>
					</div>

					<div className='formbtn'>
						<button type='submit'>Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default JoinUsForm;
