import React, { useState, useEffect } from "react";
import "./donate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import PayUForm from "./PayUForm";
import Paypal from "./Paypal";

const DonationPage = () => {
	useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });
		AOS.init(); // Initialize AOS animations

		// Load PayPal SDK
		const script = document.createElement("script");
		script.src =
			"https://www.paypal.com/sdk/js?client-id=ARfexKIk2i67_lZXjtb-NhiXj3rJO9cDli3v7-lk45jOs_fvZp-IzvanbPyJOPmOW8Eiq0bbODczpSUx&currency=USD";
		script.addEventListener("load", () => setPaypalReady(true));
		document.body.appendChild(script);
	}, []);

	const [amount, setAmount] = useState("1000"); // Default amount in paise (1000 paise = 10 INR)
	const [customAmount, setCustomAmount] = useState(""); // Custom amount entered by the user
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

	const handlePayment = () => {
		if (typeof window.Razorpay === "undefined") {
			console.error("Razorpay SDK not loaded");
			return;
		}

		let finalAmount;

		if (customAmount) {
			const customAmountInPaise = parseFloat(customAmount) * 100;
			if (isNaN(customAmountInPaise) || customAmountInPaise <= 0) {
				alert("Please enter a valid amount");
				return;
			}
			finalAmount = customAmountInPaise;
		} else {
			finalAmount = parseInt(amount, 10);
		}

		const options = {
			key: "rzp_live_Z0oXHYNLxtwVOw", // Replace with your Razorpay Key ID
			amount: finalAmount, // Amount in paise
			currency: "INR",
			name: "Life Foundation",
			description: "Donation",
			image: "./images/logo8.png", // Replace with your logo URL
			handler: function (response) {
				alert("Payment Successful: " + response.razorpay_payment_id);
				// Handle successful payment here, such as sending the payment ID to your server for verification
			},
			prefill: {
				name: name,
				email: email,
				contact: mobile,
			},
			notes: {
				address: address,
				panCard: panCard,
			},
			theme: {
				color: "#f0dd4d",
			},
			modal: {
				ondismiss: function () {
					alert("Payment cancelled.");
				},
			},
		};

		const rzp = new window.Razorpay(options);
		rzp.on("payment.failed", function (response) {
			alert("Payment Failed: " + response.error.description);
			// Handle payment failure here
		});
		rzp.open();
	};

	const handleInternationalPayment = () => {
		// Placeholder for international payment handling logic
		// PayPal button will take care of the transaction
	};

	const handleSubmit = (event) => {
		event.preventDefault(); // Prevent default form submission which reloads the page
		handlePayment();
	};

	const handleInternationalSubmit = (event) => {
		event.preventDefault();
		handleInternationalPayment();
	};

	// Render PayPal button only when SDK is loaded and button hasn't been rendered yet
	useEffect(() => {
		if (
			paypalReady &&
			window.paypal &&
			!paypalButtonRendered &&
			internationalAmount
		) {
			window.paypal
				.Buttons({
					createOrder: function (data, actions) {
						console.log("International Amount: ", internationalAmount); // Check the amount value
						return actions.order.create({
							purchase_units: [
								{
									amount: {
										value: internationalAmount, // Ensure this reflects the user input
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

			setPaypalButtonRendered(true); // Ensure the button is rendered only once
		}
	}, [paypalReady, paypalButtonRendered, internationalAmount]);

	return (
		<>
			<div className='donatewrap'>
				<div
					className='donatehead'
					data-aos='fade-down'
					data-aos-duration='500'>
					<h1>Transform Lives with your Donation</h1>
					<h2>
						All donations to Life Foundation are 50% exempted under section 80G
						of Income Tax
					</h2>
				</div>

				{/* Indian Donor Form */}
				<form
					onSubmit={handleSubmit}
					className='donateform'
					data-aos='fade-up'
					data-aos-duration='500'>
					<h3>For Indian Donors</h3>
					<div className='formdiv'>
						<label>Name</label>
						<input
							type='text'
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
							placeholder='Full Name (Required)'
						/>
					</div>
					<div className='formdiv'>
						<label>PAN Card</label>
						<input
							type='text'
							value={panCard}
							onChange={(e) => setPanCard(e.target.value)}
							required
							placeholder='PAN Card No. (Required)'
						/>
					</div>
					<div className='formdiv'>
						<label>Email</label>
						<input
							type='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							placeholder='Email (Required)'
						/>
					</div>
					<div className='formdiv'>
						<label>Mobile No</label>
						<input
							type='tel'
							value={mobile}
							onChange={(e) => setMobile(e.target.value)}
							required
							placeholder='Mobile Number (Required)'
						/>
					</div>
					<div className='formdiv'>
						<label>Address</label>
						<input
							placeholder='Address (optional)'
							type='text'
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</div>
					<div className='formdiv'>
						<label>
							Donation Amount <span>₹</span>
						</label>
						<input
							type='number'
							min='1'
							value={customAmount}
							onChange={(e) => setCustomAmount(e.target.value)}
							placeholder='Enter custom amount'
						/>
					</div>
					<div className='formdiv'>
						<button type='submit' className='razorbtn'>
							<img src='./images/razorpay2.png' alt='' />
							Donate with Razorpay
						</button>
					</div>
				</form>
			</div>

			<Paypal />
		</>
	);
};

export default DonationPage;
