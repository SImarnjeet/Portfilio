import React from "react";
import BackgroundAnimations from "../Components/Background";
import Navbar from "../Components/Navbar";
import ThemeToggle from "../Components/ThemeToggle";
import MainSection from "../Components/MainSection";
import About from "../Components/About";
import Skillsection from "../Components/Skillsection";
import Project from "../Components/Project";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="min-s-screen bg-background  text-forground overflow-hidden ">
      {/* {Theme Toggle}  */}
      <ThemeToggle />
      {/* {Background Effect} */}
      <BackgroundAnimations />
      {/* {Navbar} */}
      <Navbar />
      {/* {Main Content} */}
      <MainSection />
      {/* {About} */}
      <About />
      {/* {Skills Section} */}
      <Skillsection/>
      {/* {Project Section} */}
      <Project />
      {/* {Contact Section} */}
      <Contact />
      {/* {Foooter} */}
      <Footer/>
    </div>
  );
};

export default Home;
