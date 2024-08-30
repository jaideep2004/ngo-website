import { faZ } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CustomAlert = ({ message, onClose }) => {
	const alertStyles = {
		container: {
			position: "fixed",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			background: "rgba(0, 0, 0, 0.5)",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			zIndex: 1000,
			transition: "all 0.3s ease",
		},
		content: {
			background: "white",
			padding: "20px",
			borderRadius: "5px",
			textAlign: "center",
		},
		button: {
			marginTop: "10px",
			padding: "10px 15px",
			border: "none",
			borderRadius: "5px",
			backgroundColor: "#007bff",
			color: "white",
			cursor: "pointer",
			transition: "all 0.2s ease",
		},
		buttonHover: {
			backgroundColor: "#0056b3",
        },
		para: {
            color:"black",
            fontSize:"19px"
        },
        
	};

	return (
		<div style={alertStyles.container}>
			<div style={alertStyles.content}>
				<p style={alertStyles.para}>{message}</p>
				<button
					onClick={onClose}
					style={alertStyles.button}
					onMouseOver={(e) =>
						(e.currentTarget.style.backgroundColor =
							alertStyles.buttonHover.backgroundColor)
					}
					onMouseOut={(e) =>
						(e.currentTarget.style.backgroundColor =
							alertStyles.button.backgroundColor)
					}>
					OK
				</button>
			</div>
		</div>
	);
};

export default CustomAlert;
