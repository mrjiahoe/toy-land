import styled from "styled-components";

export const ContactContainer = styled.div`
	width: 80vw;
	height: 80vh;
	margin-top: 5vh;
	margin-left: auto;
	margin-right: auto;
	justify-content: center;
`;

export const ContactTitle = styled.h1`
	color: red;
`;

export const ContactForm = styled.div`
	margin: 0;
`;

export const Name = styled.h2`
	font-size: 1.8rem;
	color: black;
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
	color: red;
`;

export const SubmitBtn = styled.button`
	/* align-items: center; */
	margin-left: auto;
	margin-right: auto;
	/* width: 40%; */
	font-size: 1.4rem;
	padding: 0.6rem 3rem;
	border: none;
	background: #ffc500;
	color: #000;
	transition: 0.2s ease-out;

	&:hover {
		color: #fff;
		background: #e31837;
		transition: 0.2s ease-out;
		cursor: pointer;
	}
`;
