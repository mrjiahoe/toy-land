import React from "react";
import {
	AboutContainer,
	AboutInnerContainer,
	AboutTitle,
	AboutContent,
	AboutButton,
	AboutLeft,
} from "./AboutElements";

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
				</AboutLeft>
			</AboutInnerContainer>
		</AboutContainer>
	);
};

export default About;
