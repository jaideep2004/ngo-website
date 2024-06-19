import React, { useState, useEffect } from "react";
import "./donate.css";
import AOS from "aos";
import "aos/dist/aos.css";

const DonationPage = () => {
	useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	const [amount, setAmount] = useState("1000"); // Default amount in paise (1000 paise = 10 INR)
	const [customAmount, setCustomAmount] = useState(""); // Custom amount entered by the user
	const [name, setName] = useState("");
	const [panCard, setPanCard] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [address, setAddress] = useState("");

	useEffect(() => {
		if (typeof window.Razorpay === "undefined") {
			console.error("Razorpay SDK not loaded");
		} else {
			console.log("Razorpay SDK loaded");
		}
	}, []);

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
			key: "rzp_test_uCEraKVgEt8ZVM", // Replace with your Razorpay Key ID
			amount: finalAmount, // Amount in paise
			currency: "INR",
			name: "Life Foundation",
			description: "Donation",
			image: "/images/logo8.png", // Replace with your logo URL
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

	const handleAmountChange = (event) => {
		setAmount(event.target.value);
		setCustomAmount(""); // Clear custom amount when a predefined amount is selected
	};

	const handleCustomAmountChange = (event) => {
		setCustomAmount(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault(); // Prevent default form submission which reloads the page
		handlePayment();
	};

	return (
		<div className='donatewrap'>
			<div className='donatehead'>
				<h1>Transform Lives with you Donation</h1>
				<h2>
					All donations to Life Foundation are 50% exempted under section 80G of
					Income Tax
				</h2>
			</div>

			<form onSubmit={handleSubmit} className='donateform'>
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
						placeholder='PAN Card No.(Required)'
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
						onChange={handleCustomAmountChange}
						placeholder='Enter custom amount'
					/>
				</div>
				{/* <label>
					Or Select Donation Amount
					<select
						value={amount}
						onChange={handleAmountChange}
						disabled={!!customAmount}>
						<option value='500'>₹5</option>
						<option value='1000'>₹10</option>
						<option value='2500'>₹25</option>
						<option value='5000'>₹50</option>
						<option value='10000'>₹100</option>
					</select>
				</label> */}
				<div className='formdiv'>
					<label htmlFor=''></label>

					<button type='submit' className='razorbtn'>
						<img src='./images/razorpay2.png' alt='' />
						Donate with Razorpay
					</button>
				</div>
			</form>
		</div>
	);
};

export default DonationPage;
