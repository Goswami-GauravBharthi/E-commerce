import { HeroSection } from "../Components/Hero/HeroSection.jsx";
import "./css/about.css";
import { AboutInfo } from "../Components/About/AboutInfo.jsx";

export const About = () => {
  return (
    <div>
      <HeroSection text="Let's Shopping" />
      <div className="w-full h-[50px] about"></div>
      <AboutInfo/>
    </div>
  );
};
