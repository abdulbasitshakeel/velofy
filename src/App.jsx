import React from 'react';
import "./style/App.css";
import Header from './components/Header';
import HeroWork from './components/HeroWork';
import About from './components/About';
import RideGlide from './components/RideGlide';
import Deals from './components/Deals';
import Testimonials from './components/Testimonials';
import Feature from './components/Feature';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Header />
            <HeroWork />
            <About />
            <RideGlide />
            <Deals />
            <Testimonials />
            <Feature />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
