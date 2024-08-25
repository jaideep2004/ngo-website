import React, { useState, useEffect } from "react";
import "./donate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

const Paypal = () => {
	useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });
		AOS.init(); // Initialize AOS animations

		// Load PayPal SDK
		const script = document.createElement("script");
		script.src =
			"https://www.paypal.com/sdk/js?client-id=AS59gZd8khMXUsEmc5REs86XEb-9XfjEoAqO1t-B1YnLkPRh1bIgpHBzBbtWZVmUc09BVDvU3RfXjqfV&currency=USD";
		script.addEventListener("load", () => setPaypalReady(true));
		document.body.appendChild(script);
	}, []);

	const [amount, setAmount] = useState("1000");
	const [customAmount, setCustomAmount] = useState("");
	const [name, setName] = useState("");
	const [panCard, setPanCard] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [address, setAddress] = useState("");

	const [internationalAmount, setInternationalAmount] = useState(""); // Amount for foreign donors
	const [foreignName, setForeignName] = useState("");
	const [foreignEmail, setForeignEmail] = useState("");
	const [foreignMobile, setForeignMobile] = useState("");
	const [foreignAddress, setForeignAddress] = useState("");
	const [paypalReady, setPaypalReady] = useState(false); // Track if PayPal SDK is ready
	const [paypalButtonRendered, setPaypalButtonRendered] = useState(false); // Track if PayPal button is rendered

	const handleInternationalPayment = () => {
		// PayPal will handle the international payment
	};

	const handleInternationalSubmit = (event) => {
		event.preventDefault();
		handleInternationalPayment();
	};

	useEffect(() => {
		// Re-render PayPal button when amount changes or SDK is ready
		if (
			paypalReady &&
			window.paypal &&
			!paypalButtonRendered &&
			internationalAmount
		) {
			// Cleanup previous PayPal buttons to avoid multiple buttons
			document.getElementById("paypal-button-container").innerHTML = "";

			window.paypal
				.Buttons({
					createOrder: function (data, actions) {
						return actions.order.create({
							purchase_units: [
								{
									amount: {
										value: internationalAmount, // Amount user entered
										currency_code: "USD",
									},
								},
							],
						});
					},
					onApprove: function (data, actions) {
						return actions.order.capture().then(function (details) {
							alert(
								"Transaction completed by " + details.payer.name.given_name
							);
						});
					},
					onError: function (err) {
						alert("PayPal payment failed: " + err);
					},
				})
				.render("#paypal-button-container");

			setPaypalButtonRendered(true); // Ensure the button is rendered only once per amount change
		}
	}, [paypalReady, internationalAmount, paypalButtonRendered]);

	useEffect(() => {
		// Reset PayPal button rendered state when the amount changes
		setPaypalButtonRendered(false);
	}, [internationalAmount]);

	return (
		<>
			<div className='donatewrap'>{/* Other content */}</div>

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
					data-aos-duration='500'
					style={{ marginTop: "50px" }}>
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
							placeholder='Enter amount in USD'
							required
						/>
					</div>
					*Paypal button will appear when you enter an amount
					<div className='formdiv' id='paypal-button-container'>
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
		</>
	);
};

export default Paypal;
