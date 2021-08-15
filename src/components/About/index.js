import React from "react";
import {
	AboutContainer,
	AboutInnerContainer,
	AboutTitle,
	AboutContent,
	AboutButton,
	AboutLeft,
	AboutImage1,
	AboutImage2,
	ImageContainer,
} from "./AboutElements";
import image1 from "../../images/about1.jpg";
import image2 from "../../images/about2.jpg";

const About = () => {
	return (
		<AboutContainer>
			<AboutInnerContainer>
				<AboutTitle>Our Story</AboutTitle>
				<AboutLeft>
					<AboutContent>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
						vulputate metus, et condimentum magna. Phasellus elementum felis
						ultricies ipsum feugiat ornare. Nam in tempus lorem. Suspendisse a
						ullamcorper arcu. Maecenas semper enim non leo aliquet faucibus.
						Curabitur ut quam eros. <br />
					</AboutContent>
					<AboutButton>Learn more about us</AboutButton>
					<ImageContainer>
						<AboutImage1 src={image1} alt="images" />
						<AboutImage2 src={image2} alt="images" />
					</ImageContainer>
				</AboutLeft>
			</AboutInnerContainer>
		</AboutContainer>
	);
};

export default About;
