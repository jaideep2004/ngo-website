import React from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Submenu from "./Submenu";

const Header = () => {
	useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};

	const [isIconVisible, setIsIconVisible] = useState(false);

	const toggleIcon = () => {
		setIsIconVisible(!isIconVisible);
	};

	const handleButtonClick = () => {
		toggleVisibility();
		toggleIcon();
		// Add any other functions you want to call here
	};

	const handleLinkClick = () => {
		// Close the menu when a link is clicked
		setIsVisible(false);
		setIsIconVisible(false);
	};

	return (
		<header className='header'>
			<div className='headwrapper'>
				<NavLink to='/' className='logolink'>
					<div className='logo'>
						{/* <img src='./images/logo8.png' alt='' /> */}
						<img src='./images/logo1.png' alt='' />
						<img src='./images/logo9.png' alt='' />
					</div>
					<div id='logofc'>(FCRA Approved)</div>
				</NavLink>
				{/* fcra approved */}
				<div onClick={handleButtonClick}>
					{isIconVisible ? (
						<i
							id='mmenu2'
							class='fa-solid fa-circle-xmark fa-2xl'
							data-aos='zoom-in'></i>
					) : (
						<div id='mmenu'>
							<div></div>
							<div></div>
							<div></div>
						</div>
					)}
				</div>

				{isVisible && (
					<div className='mobilemenu'>
						<NavLink
							to='/'
							id='mo1'
							data-aos='zoom-in-down'
							// data-aos-duration='500'
							onClick={handleLinkClick}>
							<div className='optcontain0'>HOME</div>
						</NavLink>
						<NavLink
							to='about'
							id='mo1'
							data-aos='zoom-in-down'
							// data-aos-duration='500'
							onClick={handleLinkClick}>
							<div className='optcontain0'>ABOUT US</div>
						</NavLink>
						<NavLink
							to='activities'
							id='mo1'
							data-aos='zoom-in-down'
							// data-aos-duration='500'
							onClick={handleLinkClick}>
							<div className='optcontain0'>PROJECTS</div>
						</NavLink>
						{/* <NavLink
								to='members'
								id='mo1'
								data-aos='zoom-in-down'
								// data-aos-duration='500'
								onClick={handleLinkClick}>
								<div className='optcontain0'>MEMBERS</div>
							</NavLink> */}
						<NavLink
							to='gallery'
							id='mo1'
							data-aos='zoom-in-down'
							// data-aos-duration='500'
							onClick={handleLinkClick}>
							<div className='optcontain0'>ACTIVITIES</div>
						</NavLink>
						<NavLink
							to='joinus'
							id='mo1'
							data-aos='zoom-in-down'
							// data-aos-duration='500'
							onClick={handleLinkClick}>
							<div className='optcontain0'>VOLUNTEER</div>
						</NavLink>
						<NavLink
							to='donate'
							id='mo1'
							onClick={handleLinkClick}
							data-aos='zoom-in-down'
							data-aos-duration='500'>
							<div>
								<div className='optcontain0'>DONATE</div>
							</div>
						</NavLink>
					</div>
				)}

				<div className='links'>
					<div className='link'>
						<NavLink to='/'>HOME</NavLink>
					</div>

					<div className='link'>
						<NavLink to='about'>ABOUT US</NavLink>
					</div>

					<div className='link'>
						<NavLink to='activities'>PROJECTS</NavLink>
					</div>

					{/* <div className='link'>
							<NavLink to='members'>MEMBERS</NavLink>
						</div> */}
					<div className='link'>
						<NavLink to='gallery'>ACTIVITIES</NavLink>
					</div>

					<div className='link'>
						<NavLink to='joinus'>VOLUNTEER</NavLink>
					</div>
					<div className='link' id='contactbtn'>
						<NavLink to='donate'>DONATE</NavLink>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
