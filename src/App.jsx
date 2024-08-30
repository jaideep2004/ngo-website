import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import JoinUsForm from "./components/JoinUS/JoinUsForm";
import DonationPage from "./components/Donate/DonationPage";
import Activities from "./components/Activities/Activities";
import ActivityContent from "./components/Activities/ActivityContent";
import Gallery from "./components/Gallery/Gallery";
import projects from "./components/data/data"; // Import projects data from data.js
import Terms from "./components/terms&conditions/Terms";
import Privacy from "./components/terms&conditions/Privacy";
import Refund from "./components/terms&conditions/Refund";
import Dashboard from "./components/posts/Dashboard";
import Login from "./components/posts/Login";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import PostDetail from "./components/posts/PostDetail";
import { PostProvider } from "./components/posts/PostContext";

function App() {
	const [token, setToken] = useState(null);

	
	return (
		<>
			<PostProvider>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/about' element={<About />} />
					{/* <Route path='/members' element={<Members />} /> */}
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
					<Route path='/termsconditions' element={<Terms />} />
					<Route path='/privacypolicy' element={<Privacy />} />
					<Route path='/refundpolicy' element={<Refund />} />
					<Route path='/dashboard' element={<Dashboard />} />

					<Route path='/login' element={<Login onLogin={setToken} />} />
					<Route path='/posts/:id' element={<PostDetail />} />
				</Routes>
				<Footer />
				</BrowserRouter>
				</PostProvider>
		</>
	);
}

export default App;
