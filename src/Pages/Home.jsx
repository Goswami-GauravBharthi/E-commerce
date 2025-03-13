import { HeroSection } from "../Components/Hero/HeroSection.jsx";
import { Services } from "../Components/Servicees/Services.jsx";
import { Trusted } from "../Components/Servicees/Trusted.jsx";
import { Feature } from "../Components/Feature/Feature.jsx";

export const Home = () => {
  return (
    <>
      <HeroSection text="Welcome to" />
      <Feature />
      <Services />
      <Trusted />
    </>
  );
};
