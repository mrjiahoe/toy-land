import React from "react";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarMenu,
	SidebarLink,
	SidebarRoute,
	SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onclick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarMenu>
				<SidebarLink to="/">Home</SidebarLink>
				<SidebarLink to="/">About Us</SidebarLink>
				<SidebarLink to="/">Why Us</SidebarLink>
			</SidebarMenu>
			<SideBtnWrap>
				<SidebarRoute to="/">Contact Us Now</SidebarRoute>
			</SideBtnWrap>
		</SidebarContainer>
	);
};

export default Sidebar;
