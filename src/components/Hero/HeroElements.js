import styled from "styled-components";
import ImgBg from "../../images/bg.jpg";

export const HeroContainer = styled.div`
	background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)),
		url(${ImgBg});
	height: auto;
	width: 100%;
	background-position: center;
	background-size: cover;
	padding-top: 100px;
`;

export const HeroContent = styled.div`
	height: calc(100vh -80px);
	max-height: 80vh;
	width: 100vw;
	padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	height: 100vh;
	max-height: 100%;
	padding: 0 2rem;
	width: 60vw;
	color: #fff;
	text-transform: capitalize;
	line-height: 1;
	font-weight: bold;

	@media screen and (max-width: 650px) {
		width: 100%;
		justify-content: flex-end;
		padding-bottom: 1rem;
	}
`;

export const HeroH1 = styled.h1`
	font-size: clamp(2.5rem, 10vw, 5rem);
	margin-bottom: 1rem;
	box-shadow: 0 3px #e9ba23;
	letter-spacing: 3px;
`;

export const HeroP = styled.p`
	font-size: clamp(2rem, 2.5vw, 3rem);
	margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
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
