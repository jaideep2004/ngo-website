import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footerwrapper'>
				<div className='leftfoot'>
					<div className='footlogo'>
						<img src='./images/logo5.png' alt='' />
					</div>
				</div>

				<div className='centerfoot'>
					<div className='quicklinks'>
						<div className='footlink'>
							<NavLink to='/'>Home</NavLink>
						</div>
						<div className='footlink'>
							<NavLink to='about'>About Us</NavLink>
						</div>
						<div className='footlink'>
							<NavLink to='activities'>Projects</NavLink>
						</div>
						<div className='footlink'>
							<NavLink to='members'>Members</NavLink>
						</div>

						<div className='footlink'>
							<NavLink to='gallery'>Gallery</NavLink>
						</div>
						<div className='footlink'>
							<NavLink to='donate'>Donate</NavLink>
						</div>
					</div>
				</div>

				<div className='rightfoot'>
					<div className='footaddress1'>
						<table className='foottab'>
							<tr>
								<td>
									<i class='fa-solid fa-location-dot '></i>
									Head Office:
								</td>
								<td>
									Unit 225 Westend Mall, District Centre, Janakpuri, New Delhi
									110058
								</td>
							</tr>
							<tr>
								<td>
									{" "}
									<i class='fa-solid fa-location-dot '></i>Branch Office:
								</td>
								<td>2063/5 Lehal Colony, Patiala-147001 PUNJAB</td>
							</tr>
							<tr>
								<td>
									<i class='fa-solid fa-envelope'></i>
									Email:
								</td>
								<td>
									<a href=''>lifefoundhelp@gmail.com</a>
								</td>
							</tr>
							<tr>
								<td>
									<i class='fa-solid fa-phone'></i>
									Phone:
								</td>
								<td>
									<a href=''> +91-9056661699</a>
								</td>
							</tr>
							<tr>
								<td></td>
								<td>
									<a href=''>+91-9417201720</a>
								</td>
							</tr>
						</table>
						<div className='flink'>
							<div>
								<a href='https://api.whatsapp.com/send?phone=9056661699'>
									<i class='fa-brands fa-whatsapp fa-2xl'></i>
								</a>
							</div>
							<div>
								<a href='https://www.instagram.com/life.found.help'>
									<i class='fa-brands fa-instagram fa-2xl'></i>
								</a>
							</div>
							
							
						</div>
					</div>
				</div>
			</div>

			<div className='copyrightfoot'>© Copyright 2023 LIFE FOUNDATION NGO</div>
		</footer>
	);
};

export default Footer;
