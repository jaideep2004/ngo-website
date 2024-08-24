import React from "react";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
const Main4 = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className='main4wrapper'>
			<div className='main4left'>
				<div className='main4head'>
					<div>LIFE FOUNDATION (N.G.O.) </div>
					<div>ACCOUNT FOR FOREIGN TRANSACTIONS</div>
				</div>
				<div className='main4con'>
					<table className='banktab'>
						<tr>
							<td className='det11'>BANK </td>
							<td>
								STATE BANK OF INDIA, NEW DELHI MAIN BRANCH, 11, SANSAD MARG, NEW
								DELHI- 110001
							</td>
						</tr>
						<tr>
							<td> ACCOUNT NO.</td>
							<td>41250707198 (FCRA CURRENT A/C)</td>
						</tr>
						<tr>
							<td> BRANCH CODE </td>
							<td>00691</td>
						</tr>
						<tr>
							<td> IFSC CODE</td>
							<td>SBIN0000691</td>
						</tr>
						<tr>
							<td> SWIFT CODE</td>
							<td>SBININBB104</td>
						</tr>
						<tr>
							<td> BANK ADDRESS</td>
							<td>
								STATE BANK OF INDIA, NEW DELHI MAIN BRANCH, 11, SANSAD MARG, NEW
								DELHI- 110001
							</td>
						</tr>
					</table>
				</div>
				<div
					className='donatebtn'
					data-aos='fade-right'
					data-aos-duration='400'>
					<NavLink to='donate'>DONATE NOW</NavLink>
					
				</div>
			</div>
			<div className='main4right'>
				<div className='main4img'>
					<img src='./images/ab3.jpg' alt='' />
				</div>
			</div>
		</div>
	);
};

export default Main4;
