import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons for showing/hiding password

const API_URL = "https://ngowebsitebackend-4dkd.onrender.com/api"; // Update as needed

const Login = ({ onLogin }) => {
	useEffect(() => {
		AOS.init();
	}, []);

	useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
	const navigate = useNavigate(); // Use the useNavigate hook for navigation

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(`${API_URL}/auth/login`, {
				username,
				password,
			});
			if (response.data.isLoggedIn) {
				onLogin(response.data.token); // Assuming you set token in local storage or state
				navigate("/dashboard"); // Redirect to dashboard upon successful login
			} else {
				setError("Login failed");
			}
		} catch (err) {
			setError("Login failed");
		}
	};

	return (
		<div className='mainjoinuswrap'>
			<div className='joinhead' data-aos='fade-down' data-aos-duration='500'>
				<h1>Admin Login</h1>
			</div>
			<form onSubmit={handleSubmit} className='joinform'>
				<div className='formdiv'>
					<label>Username:</label>
					<input
						type='text'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className='formdiv'>
					<label>Password:</label>
					<input
						type={showPassword ? "text" : "password"}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<div
						className='password-toggle'
						onClick={() => setShowPassword(!showPassword)}>
						{showPassword ? <FaEyeSlash /> : <FaEye />}
					</div>
				</div>
				<div className='formdiv'>
					<div className='formbtn'>
						<button type='submit'>Login</button>
					</div>
				</div>
				{error && <p>{error}</p>}
			</form>
		</div>
	);
};

export default Login;
