import styled from "styled-components";

export const WhyContainer = styled.div`
	background-color: grey;
	height: 80vh;
	box-shadow: 2px solid red;

	@media screen and (max-width: 760px) {
		height: 100vh;
	}
`;

export const WhyTitle = styled.h1`
	font-size: clamp(2rem, 2.5rem, 3rem);
	text-align: center;
	padding-top: 40px;
	padding-bottom: 40px;
`;

export const WhyCardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 30vw);
	justify-content: space-evenly;
	padding-bottom: 50px;

	@media screen and (max-width: 760px) {
		grid-template-columns: repeat(1, 80vw);
	}
`;

export const WhyCard = styled.div`
	display: grid;
	border: 1px solid red;
`;

export const WhyImage = styled.img`
	display: flex;
	width: calc(30vw - 2px);
	object-fit: cover;
	align-self: center;

	@media screen and (max-width: 760px) {
		width: calc(80vw - 2px);
	}
`;

export const WhyHeading = styled.h2`
	padding-top: 5px;
	text-align: center;
`;

export const WhyContent = styled.p`
	padding-top: 5px;
	padding-bottom: 30px;
	text-align: center;
`;
