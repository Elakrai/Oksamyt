import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';

function Header() {
    return(
        <header>
            <nav>
                <div className="logo">
                    <NavLink to ='/' activeClassName = 'active'><h1>ОКСАМИТ</h1></NavLink>
			    </div>
                <ul className="top_menu">
				    <li><NavLink to ='/' activeClassName = 'active'>Головна</NavLink></li>
				    <li><NavLink to ='/about' activeClassName = 'active'>Про нас</NavLink></li>
				    <li><NavLink to ='/contact' activeClassName = 'active'>Контакти</NavLink></li>
                    <li>
                        <NavLink to ='/' activeClassName = 'active'>Українська</NavLink>
                    </li>
			    </ul>
            </nav>
        </header>
    )
}
export default Header;