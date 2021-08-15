import {
	HeroContainer,
	HeroContent,
	HeroItems,
	HeroH1,
	HeroP,
	HeroBtn,
} from "./HeroElements";

const Hero = () => {
	return (
		<HeroContainer>
			<HeroContent>
				<HeroItems>
					<HeroH1>Lorem ipsum dolor</HeroH1>
					<HeroP>Lorem ipsum</HeroP>
					<HeroBtn>Learn More</HeroBtn>
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	);
};

export default Hero;
