import React from "react";

const ActivityCard = ({ imgsrc, cardhead }) => {
	// Splitting the cardhead into main part and bracketed part
	const cardheadParts = cardhead.split("(");
	const mainPart = cardheadParts[0].trim(); // Main part before the bracket
	const bracketPart = cardheadParts[1] ? `(${cardheadParts[1]}` : ""; // Bracket part (if exists)

	return (
		<div>
			<div className='contcard' data-aos='fade-up' data-aos-duration='500'>
				<img src={imgsrc} alt='' />
				<div className='cardhead'>
					{mainPart}
					{/* Display the main part of cardhead */}
					<h6>{bracketPart}</h6> {/* Display the bracket part of cardhead */}
				</div>
				<div className='readbtn'>Read More</div>
			</div>
		</div>
	);
};

export default ActivityCard;
