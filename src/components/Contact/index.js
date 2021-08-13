import React from "react";
import {
	ContactContainer,
	ContactTitle,
	ContactForm,
	Name,
	NameInput,
	TextArea,
	SubmitBtn,
} from "./ContactElement";

const Contact = () => {
	return (
		<ContactContainer>
			<ContactTitle>Contact</ContactTitle>
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
	);
};

export default Contact;
