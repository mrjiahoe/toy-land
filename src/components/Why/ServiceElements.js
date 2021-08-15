import styled from "styled-components";
import whybg from "../../images/whybg.jpg";
import whybg2 from "../../images/whybg2.jpg";

export const WhyContainer = styled.div`
	background: url(${whybg});
	/* object-fit: cover; */
	min-height: 80vh;
	background-size: 150%;
	background-position: right 0px bottom 0px;
	background-repeat: no-repeat;

	/* @media screen and (max-width: 770px) {
		height: auto;
		background-size: 200%;
		background-position: left 30% bottom 0;
		background-repeat: no-repeat;
	} */
	@media screen and (max-width: 1100px) {
		background: url(${whybg2});
		background-size: 200%;
	}
`;

export const WhyTitle = styled.h1`
	font-size: clamp(2rem, 2.5rem, 3rem);
	text-align: center;
	padding-top: 40px;
	padding-bottom: 40px;
	color: white;

	@media screen and (max-width: 1100px) {
		color: black;
	}
`;

export const WhyCardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 30vw);
	justify-content: space-evenly;
	padding-bottom: 50px;

	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(1, 70vw);
	}
	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(1, 60vw);
	}
`;

export const WhyCard = styled.div`
	display: grid;
	background-color: rgba(176, 176, 176, 0.8);
	border-radius: 25px;
	margin-top: 25px;
`;

export const WhyImage = styled.img`
	display: flex;
	width: 30vw;
	object-fit: cover;
	align-self: center;
	border-radius: 25px 25px 0 0;

	@media screen and (max-width: 1100px) {
		width: 70vw;
	}
	@media screen and (max-width: 768px) {
		width: 60vw;
	}
`;

export const WhyHeading = styled.h2`
	padding-top: 25px;
	text-align: center;
	text-transform: capitalize;
`;

export const WhyContent = styled.p`
	padding: 5px 5px 30px 5px;
	text-align: center;
`;
