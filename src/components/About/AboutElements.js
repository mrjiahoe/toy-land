import styled from "styled-components";

export const AboutContainer = styled.div`
	text-decoration: none;
	display: flex;
	/* Gradients from https://uigradients.com/#Portrait */
	background: #8e9eab; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to right,
		#eef2f3,
		#8e9eab
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to right,
		#eef2f3,
		#8e9eab
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	/* border: 1px solid blue; */
	@media screen and (max-width: 1100px) {
		display: block;
	}
`;

export const AboutInnerContainer = styled.div`
	height: 100%;
	padding-top: 50px;
	position: relative;
	/* border: 1px solid yellow; */
`;

export const AboutTitle = styled.h1`
	color: red;
	text-align: left;
	font-size: clamp(1.8rem, 3rem, 5rem);
	margin: 1.5rem;
	box-shadow: 0px 5px red;
	width: 45%;
	letter-spacing: 3px;

	@media screen and (max-width: 760px) {
	}
`;

export const AboutLeft = styled.div`
	/* border: 1px solid green; */

	@media screen and (max-width: 1100px) {
		display: block;
		width: 100%;
	}
`;

export const AboutContent = styled.p`
	font-size: clamp(1.2rem, 2vw, 2rem);
	width: 60vw;
	margin: 0 1rem 1.2rem 1rem;
	/* border: 1px solid grey; */
	border-radius: 25px;

	@media screen and (max-width: 1100px) {
		width: 90vw;
		padding: 10px;
		margin-left: auto;
		margin-right: auto;
	}
`;

export const AboutButton = styled.button`
	font-size: clamp(1.2rem, 2vw, 2rem);
	padding: 1rem 4rem;
	border: none;
	background: #e31837;
	color: #fff;
	transition: 0.2s ease-out;
	margin: 0 2rem;

	&:hover {
		background: #ffc500;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
	}

	@media screen and (max-width: 1100px) {
		margin: 0 2.5rem;
	}
`;

export const ImageContainer = styled.div`
	display: block;
`;

export const AboutImage1 = styled.img`
	display: flex;
	text-align: right;
	margin: 2rem;
	width: 90%;
	max-height: 60vh;
	object-fit: cover;

	position: relative;
	align-self: flex-end;

	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

export const AboutImage2 = styled.img`
	display: none;

	@media screen and (max-width: 1100px) {
		display: block;
		position: relative;
		width: auto;
		height: 35vh;
		margin: 25px auto 5vh auto;
	}

	@media screen and (max-width: 500px) {
		height: 20vh;
	}
`;
