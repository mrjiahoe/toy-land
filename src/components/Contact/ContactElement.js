import styled from "styled-components";
import contact1 from "../../images/contact3.jpg";
import contact2 from "../../images/contact2.jpg";

export const ContactBg = styled.div`
	display: flex;
	/* height: 100vh; */
	background: url(${contact1});
	align-items: center;
	background-size: cover;

	@media screen and (max-width: 1100px) {
		background: url(${contact2});
		background-size: cover;
	}
`;

export const ContactContainer = styled.div`
	display: block;
	width: 80vw;
	height: auto;
	margin: 10vh auto;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.3);
	padding: 2rem;
	border-radius: 20px;
`;

export const ContactTitle = styled.h1`
	font-size: clamp(3rem, 5vw, 5rem);
	color: white;
	text-align: center;
`;

export const ContactForm = styled.div``;

export const Name = styled.h2`
	font-size: 1.8rem;
	color: white;
	margin: 0.8rem 0.5rem;
`;

export const NameInput = styled.input`
	width: 100%;
	font-size: 1.6rem;
	padding: 5px 5px 5px 10px;
`;

export const TextArea = styled.textarea`
	width: 100%;
	height: 20vh;
	font-size: 1.6rem;
	padding: 5px 5px 0 10px;
`;

export const SubmitBtn = styled.button`
	margin-top: 1rem;
	margin-left: auto;
	margin-right: auto;
	font-size: 1.4rem;
	padding: 0.6rem 3rem;
	border: none;
	background: #ffc500;
	color: #000;
	transition: 0.2s ease-out;
	border-radius: 20px;

	&:hover {
		color: #fff;
		background: #e31837;
		transition: 0.2s ease-out;
		cursor: pointer;
	}
`;
