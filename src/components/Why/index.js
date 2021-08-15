import React from "react";
import {
	WhyContainer,
	WhyTitle,
	WhyCard,
	WhyImage,
	WhyHeading,
	WhyContent,
	WhyCardContainer,
} from "./ServiceElements";
import why1 from "../../images/why1.png";

const Service = () => {
	return (
		<WhyContainer>
			<WhyTitle>Why us?</WhyTitle>
			<WhyCardContainer>
				<WhyCard>
					<WhyImage src={why1} alt="why" />
					<WhyHeading>Lorem ipsum</WhyHeading>
					<WhyContent>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</WhyContent>
				</WhyCard>

				<WhyCard>
					<WhyImage src={why1} alt="why" />
					<WhyHeading>Lorem ipsum</WhyHeading>
					<WhyContent>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</WhyContent>
				</WhyCard>

				<WhyCard>
					<WhyImage src={why1} alt="why" />
					<WhyHeading>Lorem ipsum</WhyHeading>
					<WhyContent>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</WhyContent>
				</WhyCard>
			</WhyCardContainer>
		</WhyContainer>
	);
};

export default Service;
