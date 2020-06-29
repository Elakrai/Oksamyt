import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';

function AboutContact() {
    return(
        <section className="about_contact">
            <p>
                Дайте нам знати, якщо ви хочете скористатися однією з послуг
            </p>
            <div className="about_contact_button">
                <NavLink to ='/contact' activeClassName = 'active'>Скористатися послугою</NavLink>
            </div>
        </section>
    )
}
export default AboutContact;