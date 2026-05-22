import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutPreview from "../components/AboutPreview";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import ContactNewsletter from "../components/ContactNewsletter";
import Footer from "../components/Footer";

function Home(){
    return(
        <>
            <Navbar />
            <Hero />
            <Features />
            <WhyChooseUs/>
            <AboutPreview />
            <Testimonials />
            <CTA />
            <ContactNewsletter />
            <Footer />
        </>
    );
}

export default Home;