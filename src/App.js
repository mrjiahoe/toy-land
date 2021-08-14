import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Hero";
// import Feature from "./components/Feature";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Why from "./components/Why";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<Router>
			<GlobalStyle />
			<Navbar toggle={toggle} />
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Hero />
			<About />
			<Why />
			{/* <Feature /> */}
			<Contact />
			<Footer />
		</Router>
	);
}

export default App;
