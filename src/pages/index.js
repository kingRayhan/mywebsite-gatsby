import React from "react";
import VMenu from "../components/VMenu";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import InstaGallery from "../components/InstaGallery";
import Head from "../components/head";

const Home = ({ data: instagramData }) => {
  return (
    <div>
      <Head title="I'm Rayhan | Fullstack web developer" />
      <VMenu />
      <Hero />
      <AboutMe />
      <InstaGallery data={instagramData} />
    </div>
  );
};

export const query = graphql`
  query allInstaNode {
    allInstaNode {
      nodes {
        id
        original
      }
    }
  }
`;

export default Home;
