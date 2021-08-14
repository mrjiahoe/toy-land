import styled from "styled-components";

export const WhyContainer = styled.div`
	box-shadow: 2px solid red;
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

	@media screen and (max-width: 1024px) {
		grid-template-columns: repeat(1, 80vw);
	}
	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(1, 70vw);
	}
`;

export const WhyCard = styled.div`
	display: grid;
	background-color: grey;
	border-radius: 25px;
	margin-top: 25px;
`;

export const WhyImage = styled.img`
	display: flex;
	width: 30vw;
	object-fit: cover;
	align-self: center;
	border-radius: 25px 25px 0 0;

	@media screen and (max-width: 1024px) {
		width: 80vw;
	}
	@media screen and (max-width: 768px) {
		width: 70vw;
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
