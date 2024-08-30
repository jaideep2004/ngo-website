import React, { useState, useEffect } from "react";
import "./donate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import CustomAlert from "./CustomAlert"; // Import the custom alert component

const Paypal = () => {
	const [internationalAmount, setInternationalAmount] = useState("");
	const [foreignName, setForeignName] = useState("");
	const [foreignEmail, setForeignEmail] = useState("");
	const [foreignMobile, setForeignMobile] = useState("");
	const [foreignAddress, setForeignAddress] = useState("");
	const [paypalReady, setPaypalReady] = useState(false);
	const [paypalButtonRendered, setPaypalButtonRendered] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [alertMessage, setAlertMessage] = useState("");

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		AOS.init();

		const script = document.createElement("script");
		script.src =
			"https://www.paypal.com/sdk/js?client-id=AS59gZd8khMXUsEmc5REs86XEb-9XfjEoAqO1t-B1YnLkPRh1bIgpHBzBbtWZVmUc09BVDvU3RfXjqfV&currency=USD";
		script.addEventListener("load", () => setPaypalReady(true));
		document.body.appendChild(script);
	}, []);

	const handleInternationalPayment = () => {};

	const handleInternationalSubmit = (event) => {
		event.preventDefault();
		handleInternationalPayment();
	};

	useEffect(() => {
		if (paypalReady && window.paypal && !paypalButtonRendered) {
			document.getElementById("paypal-button-container").innerHTML = "";

			window.paypal
				.Buttons({
					createOrder: function (data, actions) {
						return actions.order.create({
							purchase_units: [
								{
									amount: {
										value: internationalAmount,
										currency_code: "USD",
									},
								},
							],
						});
					},
					onApprove: function (data, actions) {
						return actions.order.capture().then(function (details) {
							setAlertMessage(
								`Your donation of $${internationalAmount} was successful. Thank you, ${details.payer.name.given_name}!`
							);
							setShowAlert(true);
						});
					},
					onError: function (err) {
						setAlertMessage(
							`Payment failed for the donation of $${internationalAmount}. Please try again. Error: ${err}`
						);
						setShowAlert(true);
					},
					onCancel: function () {
						setAlertMessage(
							`Payment was canceled for the donation of $${internationalAmount}.`
						);
						setShowAlert(true);
					},
				})
				.render("#paypal-button-container");

			setPaypalButtonRendered(true);
		}
	}, [paypalReady, internationalAmount, paypalButtonRendered]);

	useEffect(() => {
		setPaypalButtonRendered(false);
	}, [internationalAmount]);

	const handleCloseAlert = () => {
		setShowAlert(false);
	};

	return (
		<>
			<div className='donatewrap'>
				<div
					className='donatehead'
					data-aos='fade-down'
					data-aos-duration='500'>
					<h3>International Payments</h3>
					<h1>Transform Lives with your Donation</h1>
					<h2>
						All donations to Life Foundation are 50% exempted under section 80G
						of Income Tax
					</h2>
				</div>
				<form
					onSubmit={handleInternationalSubmit}
					className='donateform'
					data-aos='fade-up'
					data-aos-duration='500'>
					<h3>For International Donors</h3>
					<div className='formdiv'>
						<label>Name</label>
						<input
							type='text'
							value={foreignName}
							onChange={(e) => setForeignName(e.target.value)}
							required
							placeholder='Full Name (Required)'
						/>
					</div>
					<div className='formdiv'>
						<label>Email</label>
						<input
							type='email'
							value={foreignEmail}
							onChange={(e) => setForeignEmail(e.target.value)}
							required
							placeholder='Email (Required)'
						/>
					</div>
					<div className='formdiv'>
						<label>Mobile No</label>
						<input
							type='tel'
							value={foreignMobile}
							onChange={(e) => setForeignMobile(e.target.value)}
							required
							placeholder='Mobile Number (Required)'
						/>
					</div>
					<div className='formdiv'>
						<label>Address</label>
						<input
							placeholder='Address (optional)'
							type='text'
							value={foreignAddress}
							onChange={(e) => setForeignAddress(e.target.value)}
						/>
					</div>
					<div className='formdiv'>
						<label>
							Donation Amount <span>$</span>
						</label>
						<input
							type='number'
							min='1'
							value={internationalAmount}
							onChange={(e) => setInternationalAmount(e.target.value)}
							placeholder='Enter amount '
							required
						/>
					</div>

					<div
						className='formdiv'
						id='paypal-button-container'
						style={{
							opacity: internationalAmount ? 1 : 0.5,
							pointerEvents: internationalAmount ? "auto" : "none",
						}}>
						{/* PayPal Button will be rendered here */}
					</div>
				</form>
			</div>
			<div className='termscontain'>
				<NavLink to='/termsconditions' className='tlink'>
					Terms & Conditions
				</NavLink>
				<NavLink to='/privacypolicy' className='tlink'>
					Privacy Policy
				</NavLink>
				<NavLink to='/refundpolicy' className='tlink'>
					Refund Policy
				</NavLink>
			</div>

			{showAlert && (
				<CustomAlert message={alertMessage} onClose={handleCloseAlert} />
			)}
		</>
	);
};

export default Paypal;
