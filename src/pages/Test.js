import React from "react";
import Hero from "../components/Heroes/Hero";
import Features from "./Features";
import Features1 from "../components/Features/Features1";
import Blog from "../components/Blogs/Blog";
import Portfolio from "../components/Portfolios/Portfolio";
import Team1 from "../components/Teams/Team1";
import Faq from "../components/Faqs/Faq";
import Testimonial from "../components/Testimonials/Testimonial";
import Pricing from "../components/Pricings/Pricing";
import Newsletter from "../components/Newsletters/Newsletter";
import Contact from "../components/Contacts/Contact";
import Footer from "../components/Footers/Footer";

const Test = () => {
  return (
    <div>
      <Hero />
      <Features1 />
      <Blog />
      <Portfolio />
      <Team1 />
      <Faq />
      <Testimonial />
      <Pricing />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
};

export default Test;
