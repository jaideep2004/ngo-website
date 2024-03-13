import "./App.css";

import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Activities from "./components/Activities/Activities";
import Members from "./components/About/Members";
import JoinUsForm from "./components/JoinUS/JoinUsForm";
import DonationPage from "./components/Donate/DonationPage";
import ActContent from "./components/Activities/ActContent";
import Act1 from "./components/Activities/Act1";
import Act2 from "./components/Activities/Act2";
import Act3 from "./components/Activities/Act3";
import Act4 from "./components/Activities/Act4";
import Act5 from "./components/Activities/Act5";
import Act6 from "./components/Activities/Act6";
import Gallery from "./components/Gallery/Gallery";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Main />} />

					<Route path='about' element={<About />} />
					<Route path='members' element={<Members />} />

					<Route path='activities' element={<Activities />}/>
					<Route path='/actcontent' element={<ActContent />} />
					<Route path='/act1' element={<Act1 />} />
					<Route path='/act2' element={<Act2 />} />
					<Route path='/act3' element={<Act3 />} />
					<Route path='/act4' element={<Act4 />} />
					<Route path='/act5' element={<Act5 />} />
					<Route path='/act6' element={<Act6 />} />
					<Route path='/gallery' element={<Gallery />} />
					
						{/* <Route path="/actcontent/:cardId" element={<ActContent />} /> */}

					

					<Route path='joinus' element={<JoinUsForm />} />
					<Route path='donate' element={<DonationPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
