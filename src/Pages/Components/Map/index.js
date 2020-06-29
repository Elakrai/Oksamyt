import React from 'react';
import Iframe from 'react-iframe';
import './style.css';

function Map() {
    return(
        <section className="map_block">
            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162.7116048280016!2d27.43194590556752!3d49.26908877082895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4732714274baa50f%3A0xa858341dbb23ffc9!2z0J7QutGB0LDQvNC40YI!5e0!3m2!1suk!2sua!4v1593419972602!5m2!1suk!2sua"
                width="100%"
                height="500px"
                display="initial"
                position="relative"
            />
        </section>
    )
}
export default Map;