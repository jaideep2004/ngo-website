import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Main6 = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Array of images for the slider
	const images = [
		"./images/pb1.jpg",
		"./images/pb2.jpg",
		"./images/pb3.jpg",
		"./images/pb4.jpg",
		"./images/pb5.jpg",
		"./images/pb6.jpg",
		"./images/pb7.jpg",
	];

	useEffect(() => {
		AOS.init();
		
		// Auto-slide images every 4 seconds
		const slideInterval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => 
				(prevIndex + 1) % images.length
			);
		}, 4000);

		return () => clearInterval(slideInterval);
	}, [images.length]);

	return (
		<div className="main6wrapper">
			<div className="main6container">
				<div className="main6left" data-aos="fade-right" data-aos-duration="800">
					<div className="main6content">
						<div className="main6badge">
							<span>Making a Difference</span>
						</div>
						<h2 className="main6title">
							Join Us to Help
                            <span className="highlight"> Punjab </span> 
                            Rise Again
						</h2>
						<p className="main6description">
							Every contribution matters. Join thousands of compassionate individuals 
							who are making a real impact in communities around the world. Your support 
							helps us provide education, healthcare, and hope to those who need it most.
						</p>
						{/* <div className="main6stats">
							<div className="stat-item">
								<div className="stat-number">50K+</div>
								<div className="stat-label">Lives Impacted</div>
							</div>
							<div className="stat-item">
								<div className="stat-number">150+</div>
								<div className="stat-label">Projects Completed</div>
							</div>
							<div className="stat-item">
								<div className="stat-number">25+</div>
								<div className="stat-label">Countries Reached</div>
							</div>
						</div> */}
						<div className="main6buttons">
							<Link to="/donate" className="main6btn primary">
								Start Giving
							</Link>
							<Link to="/joinus" className="main6btn secondary">
								Join Our Mission
							</Link>
						</div>
					</div>
				</div>
				<div className="main6right" data-aos="fade-left" data-aos-duration="800">
					<div className="main6image-container">
						<div className="main6image-wrapper">
							{images.map((image, index) => (
								<img 
									key={index}
									src={image} 
									alt={`Community Impact ${index + 1}`} 
									className={`main6image ${
										index === currentImageIndex ? 'active' : ''
									}`}
								/>
							))}
							<div className="main6overlay">
								<div className="overlay-content">
									<div className="overlay-icon">❤️</div>
									<h3>Spreading Hope</h3>
									<p>Building stronger communities together</p>
								</div>
							</div>
							<div className="slider-indicators">
								{images.map((_, index) => (
									<button
										key={index}
										className={`indicator ${
											index === currentImageIndex ? 'active' : ''
										}`}
										onClick={() => setCurrentImageIndex(index)}
									/>
								))}
							</div>
						</div>
						{/* <div className="floating-elements">
							<div className="floating-card card1">
								<div className="card-icon">🎓</div>
								<div className="card-text">Education</div>
							</div>
							<div className="floating-card card2">
								<div className="card-icon">🏥</div>
								<div className="card-text">Healthcare</div>
							</div>
							<div className="floating-card card3">
								<div className="card-icon">🌱</div>
								<div className="card-text">Environment</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main6;