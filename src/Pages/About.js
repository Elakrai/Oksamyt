import React from 'react';
import Header from './Components/Header/index';
import AboutInfo from './Components/AboutInfo/index';
import AboutGallery from './Components/AboutGallery/index';
import Map from './Components/Map/index';
import AboutContact from './Components/AboutContact/index';
import Footer from './Components/Footer/index';

function About() {
    return(
        <div>
            <Header/>
            <AboutInfo/>
            <AboutGallery/>
            <Map/>
            <AboutContact/>
            <Footer/>
        </div>
    )
}
export default About;