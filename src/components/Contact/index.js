import React from "react";
import {
	ContactContainer,
	ContactTitle,
	ContactForm,
	Name,
	NameInput,
	TextArea,
	SubmitBtn,
	ContactBg,
} from "./ContactElement";

const Contact = () => {
	return (
		<ContactBg>
			<ContactContainer>
				<ContactTitle>Contact Us</ContactTitle>
				<ContactForm>
					<Name>Name :</Name>
					<NameInput placeholder="Your Name"></NameInput>
					<Name>Email :</Name>
					<NameInput placeholder="email@email.com"></NameInput>
					<Name>Your Message :</Name>
					<TextArea placeholder="Enter message here..." />
				</ContactForm>
				<SubmitBtn>Send Message</SubmitBtn>
			</ContactContainer>
		</ContactBg>
	);
};

export default Contact;
