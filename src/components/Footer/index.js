import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import {
	FooterContainer,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	SocialIcon,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from "./FooterElements";
import logo from "../../images/logo.png";

function Footer() {
	return (
		<FooterContainer>
			<FooterLinksContainer>
				<FooterLinksWrapper>
					<FooterLinkItems>
						<FooterLinkTitle>About Us</FooterLinkTitle>
						<FooterLink to="/">How it works</FooterLink>
						<FooterLink to="/">Testimonials</FooterLink>
						<FooterLink to="/">Careers</FooterLink>
						<FooterLink to="/">Investors</FooterLink>
					</FooterLinkItems>
				</FooterLinksWrapper>
				<FooterLinksWrapper>
					<FooterLinkItems>
						<FooterLinkTitle>Help</FooterLinkTitle>
						<FooterLink to="/">Contact Us</FooterLink>
						<FooterLink to="/">Support</FooterLink>
						<FooterLink to="/">FAQ</FooterLink>
						<FooterLink to="/">Terms</FooterLink>
					</FooterLinkItems>
				</FooterLinksWrapper>
			</FooterLinksContainer>
			<SocialMedia>
				<SocialMediaWrap>
					<SocialLogo to="/">
						<SocialIcon src={logo} alt="logo" />
						Toys
					</SocialLogo>
					<WebsiteRights>Toys © 2020</WebsiteRights>
					<SocialIcons>
						<SocialIconLink href="/" target="_blank" aria-label="Facebook">
							<FaFacebook />
						</SocialIconLink>
						<SocialIconLink href="/" target="_blank" aria-label="Instagram">
							<FaInstagram />
						</SocialIconLink>
						<SocialIconLink href="/" target="_blank" aria-label="Youtube">
							<FaYoutube />
						</SocialIconLink>
						<SocialIconLink href="/" target="_blank" aria-label="Twitter">
							<FaTwitter />
						</SocialIconLink>
					</SocialIcons>
				</SocialMediaWrap>
			</SocialMedia>
		</FooterContainer>
	);
}

export default Footer;
