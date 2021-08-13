import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";

export const Nav = styled.nav`
	background: #fff;
	height: 60px;
	display: flex;
	justify-content: space-between;
	padding: 1rem 2rem;
	z-index: 100;
	position: fixed;
	width: 100%;
`;

export const NavImage = styled.img`
	width: 2rem;
	display: inline-block;
	padding-right: 0px;
`;

export const NavTitle = styled.h1`
	display: inline-block;
	color: red;
	font-style: none;
	vertical-align: top;
	margin-left: 0.3rem;
`;

export const NavLink = styled(Link)`
	color: #fff;
	display: flex;
	align-items: center;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	text-decoration: none;
`;

export const Logo = styled(Link)`
	${NavLink}
	font-size: 1.8rem;
	font-style: italic;
	text-decoration: none;
	text-align: center;
	width: 300px;
`;

export const MenuBars = styled(FaRobot)`
	display: none;

	@media screen and (max-width: 760px) {
		display: block;
		font-size: 2rem;
		transform: translate(10%, -10%);
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	float: right;

	@media screen and (max-width: 760px) {
		display: none;
	}
`;

export const NavMenuLinks = styled(Link)`
	margin: 0 10px 0 10px;
	text-decoration: none;
	color: red;
	${NavLink};

	&:hover {
		color: black;
		box-shadow: 0 2px black;
		transition: box-shadow 0.3s ease-in-out;
	}
`;

export const NavBtn = styled.div`
	display: flex;
	align-items: center;
	margin-right: 24px;

	@media screen and (max-width: 760px) {
		display: none;
	}
`;
