import styled from "styled-components";
import images from "../../images/logo.png";

export const AboutContainer = styled.div`
	text-decoration: none;
	margin: 0;
	height: 80vh;
	display: flex;
	overflow: hidden;
`;

export const AboutTitle = styled.h1`
	text-align: center;
	font-size: clamp(2.5rem, 10vw, 5rem);
	margin-bottom: 1rem;
	box-shadow: 3px 5px #e9ba23;
	letter-spacing: 3px;
`;

export const AboutLeft = styled.div`
	width: 60%;
	display: inline-block;
	padding-left: 5rem;
`;

export const AboutContent = styled.p`
	font-size: clamp(1.5rem, 2vw, 2rem);
	margin-bottom: 2rem;
`;

export const AboutButton = styled.button`
	font-size: 1.4rem;
	padding: 1rem 4rem;
	border: none;
	background: #e31837;
	color: #fff;
	transition: 0.2s ease-out;

	&:hover {
		background: #ffc500;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
	}
`;

export const AboutImage = styled.div`
	display: inline-block;
	background: url(${images});
	top: 50%;
	left: 50%;
	height: 300px;
	min-width: 300px;
	max-width: 100px;
`;
