import React from "react";
import VMenu from "../components/VMenu";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import InstaGallery from "../components/InstaGallery";
import Head from "../components/head";

const Home = () => (
  <div>
    <Head title="I'm Rayhan | Fullstack web developer" />
    <VMenu />
    <Hero />
    <AboutMe />
    <InstaGallery />
  </div>
);

export default Home;
