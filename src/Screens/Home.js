import React from "react";
import Cards from "../Components/Cards";
import Foods from "../Components/Foods";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Info from "../Components/Info";
import MainSection from "../Components/MainSection";
import "../Components/styles/mobile.css";

const Home = () => {
  return (
    <>
      <Header />
      <MainSection />
      <Cards />
      <Foods />
      <Info />
      <Footer />
    </>
  );
};

export default Home;
