import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Members from "./components/About/Members";
import JoinUsForm from "./components/JoinUS/JoinUsForm";
import DonationPage from "./components/Donate/DonationPage";
import Activities from "./components/Activities/Activities";
import ActivityContent from "./components/Activities/ActivityContent";
import Gallery from "./components/Gallery/Gallery";
import projects from "./components/data/data"; // Import projects data from data.js

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/about' element={<About />} />
					<Route path='/members' element={<Members />} />
					<Route
						path='/activities'
						element={<Activities projects={projects} />} // Pass projects as a prop
					/>
					<Route
						path='/activity/:id'
						element={<ActivityContent projects={projects} />} // Pass projects as a prop
					/>
					<Route path='/gallery' element={<Gallery />} />
					<Route path='/joinus' element={<JoinUsForm />} />
					<Route path='/donate' element={<DonationPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
