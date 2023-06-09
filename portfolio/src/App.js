import React from "react";
import HeroSection from "./HeroSection";
import "./HeroSection.css";
import Navbar from "./Navbar";
import AboutMeSection from "./AboutMeSection";
import "./AboutMeSection.css";
import TechSkillsSection from "./TechSkillsSection";
import ProjectsSection from "./ProjectsSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMeSection />
      <TechSkillsSection />
      <ProjectsSection />
    </div>
  );
} // Add this closing brace

export default App;
