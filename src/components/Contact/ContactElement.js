import styled from "styled-components";

export const ContactContainer = styled.div`
	width: 80vw;
	height: auto;
	margin: 5vh auto;
	justify-content: center;
	background-color: #202e52;
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
