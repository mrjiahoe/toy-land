import styled from "styled-components";
import images from "../../images/about.jpg";

export const AboutContainer = styled.div`
	display: inline-block;
	text-decoration: none;
	margin-right: 5rem;
	background: url(${images});
	background-repeat: no-repeat;
	background-size: contain;
	background-position: right;
	width: 100vw;
	height: auto;
	min-height: 80vh;
`;

export const AboutInnerContainer = styled.div`
	padding: 10px 10px;
	height: 100%;
	margin-top: 50px;
	position: relative;
`;

export const AboutTitle = styled.h1`
	color: red;
	text-align: left;
	font-size: clamp(2rem, 3rem, 5rem);
	text-decoration: underline;
	margin: 1.5rem;
	/* box-shadow: 3px 5px #e9ba23; */
	letter-spacing: 3px;
`;

export const AboutLeft = styled.div`
	width: 60%;
	display: inline-block;
	padding-left: 10px;

	@media screen and (max-width: 760px) {
		width: 40%;
	}
`;

export const AboutContent = styled.p`
	font-size: clamp(1.2rem, 2vw, 2rem);
	margin-bottom: 2rem;
	padding: 1rem;
	border: 1px solid grey;
	border-radius: 25px;

	@media screen and (max-width: 760px) {
	}
`;

export const AboutButton = styled.button`
	font-size: clamp(1.2rem, 2vw, 2rem);
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
