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
					<HeroH1>Largest Toy Collection</HeroH1>
					<HeroP>in Brunei</HeroP>
					<HeroBtn>Learn More</HeroBtn>
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	);
};

export default Hero;
