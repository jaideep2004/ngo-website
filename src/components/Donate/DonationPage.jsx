import React, { useState, useEffect, useRef } from "react";
import "./donate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Paypal from "./Paypal";
import CustomAlert from "./CustomAlert"; // Import the custom alert component

const DonationPage = () => {
	const [amount, setAmount] = useState("1000");
	const [customAmount, setCustomAmount] = useState("");
	const [name, setName] = useState("");
	const [panCard, setPanCard] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [address, setAddress] = useState("");
	const [showAlert, setShowAlert] = useState(false);
	const [alertMessage, setAlertMessage] = useState("");

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		AOS.init();
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
				setAlertMessage("Please enter a valid amount");
				setShowAlert(true);
				return;
			}
			finalAmount = customAmountInPaise;
		} else {
			finalAmount = parseInt(amount, 10);
		}

		const options = {
			key: "rzp_live_Z0oXHYNLxtwVOw",
			amount: finalAmount,
			currency: "INR",
			name: "Life Foundation",
			description: "Donation",
			image: "./images/logo8.png",
			handler: function (response) {
				setAlertMessage(
					`Your donation of ₹${(finalAmount / 100).toFixed(
						2
					)} was successful! Payment ID: ${response.razorpay_payment_id}`
				);
				setShowAlert(true);
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
					// setAlertMessage("Payment cancelled.");
					setAlertMessage(`Payment cancelled for the amount of ₹${(finalAmount / 100).toFixed(2)}.`);
					setShowAlert(true);
				},
			},
		};

		const rzp = new window.Razorpay(options);
		rzp.on("payment.failed", function (response) {
			setAlertMessage(`Payment Failed: ${response.error.description}`);
			setShowAlert(true);
		});
		rzp.open();
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		handlePayment();
	};

	const localPaymentRef = useRef(null);
	const paypalRef = useRef(null);

	const handleScrollToLocal = () => {
		if (localPaymentRef.current) {
			localPaymentRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	const handleScrollToPaypal = () => {
		if (paypalRef.current) {
			paypalRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	const handleCloseAlert = () => {
		setShowAlert(false);
	};

	return (
		<>
			<div
				className='paymentButtons'
				data-aos='fade-down'
				data-aos-duration='500'>
				<div onClick={handleScrollToLocal}>Donate (India)</div>
				<div onClick={handleScrollToPaypal}>Donate (International)</div>
			</div>

			<div className='donatewrap' ref={localPaymentRef}>
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
			<div ref={paypalRef}>
				<Paypal />
			</div>
			{showAlert && (
				<CustomAlert message={alertMessage} onClose={handleCloseAlert} />
			)}
		</>
	);
};

export default DonationPage;
