import React from 'react';
import Header from './Components/Header/index';
import Info from './Components/Info/index';
import Slider from './Components/Slider/index';
import Gallery from './Components/Gallery/index';
import ContactUs from './Components/ContactUs/index';
import Footer from './Components/Footer/index';

function Home() {
    return(
        <div>
            <Header/>
            <Info />
            <Slider />
            <Gallery />
            <ContactUs />
            <Footer />
        </div>
    )
}
export default Home;