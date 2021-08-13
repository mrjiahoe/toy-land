import React from "react";
import {
	Nav,
	Logo,
	MenuBars,
	NavMenu,
	NavMenuLinks,
	NavImage,
	NavTitle,
} from "./NavbarElements";
import logo from "../../images/logo.png";

const MenuData = [
	{ title: "Home", link: "/home" },
	{ title: "About Us", link: "/about-us" },
	{ title: "Location", link: "/location" },
	{ title: "Contact Us", link: "/contact" },
];

const Navbar = ({ toggle }) => {
	return (
		<Nav>
			<Logo to="/home">
				<NavImage src={logo} alt="logo" />
				<NavTitle>Toys</NavTitle>
			</Logo>
			<MenuBars onClick={toggle} />
			<NavMenu>
				{MenuData.map((item, index) => (
					<NavMenuLinks to={item.link} key={index}>
						{item.title}
					</NavMenuLinks>
				))}
			</NavMenu>
		</Nav>
	);
};

export default Navbar;
