import React from "react";
import CTA from "../components/CTA";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import OurFeatures from "../components/OurFeatures";
import ProductsArticle from "../components/ProductsArticle";
import Testimonials from "../components/Testimonials";
import UseCases from "../components/UseCases";

const Home = () => {
  return (
    <>
    <Hero />
    <ProductsArticle />
    <UseCases />
    <OurFeatures />
    <Faqs />
    <Testimonials />
    <CTA />
    </>
  );
};

export default Home;
