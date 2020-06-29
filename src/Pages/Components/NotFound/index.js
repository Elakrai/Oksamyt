import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';

function Not_Found() {
    return(
        <section className="not_found_info">
            <h1>Сторінка не знайдена</h1>
            <div className="not_found_button">
                <NavLink to ='/' activeClassName = 'active'>Повернутися</NavLink>
            </div>
        </section>
    )
}
export default Not_Found;