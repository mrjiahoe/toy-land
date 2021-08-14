import React from "react";
import {
	AboutContainer,
	AboutTitle,
	AboutContent,
	AboutButton,
	AboutImage,
	AboutLeft,
} from "./AboutElements";

const About = () => {
	return (
		<AboutContainer>
			<AboutTitle>Our Story</AboutTitle>
			<AboutLeft>
				<AboutContent>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
					vulputate metus, et condimentum magna. Phasellus elementum felis
					ultricies ipsum feugiat ornare. Nam in tempus lorem. Suspendisse a
					ullamcorper arcu. Maecenas semper enim non leo aliquet faucibus.
					Curabitur ut quam eros. <br />
					<br />
					Proin id risus id risus aliquet elementum. Morbi sollicitudin
					tristique iaculis. Aliquam tempus orci a viverra vestibulum. Curabitur
					pulvinar mollis magna, ac tempus sem elementum vel. Morbi at accumsan
					ex, vel ultricies metus. In consectetur luctus mattis.
				</AboutContent>
				<AboutButton>Learn more about us</AboutButton>
			</AboutLeft>
			<AboutImage />
		</AboutContainer>
	);
};

export default About;
