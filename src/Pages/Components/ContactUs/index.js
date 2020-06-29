import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';

function ContactUs() {
    return(
        <section className="contact_info">
            <p>
                Якщо ви зацікавлені в одній з цих послуг, ви можете
            </p>
            <div className="contact_button">
                <NavLink to ='/contact' activeClassName = 'active'>З'єднатися з нами</NavLink>
            </div>
            
        </section>
    )
}
export default ContactUs;