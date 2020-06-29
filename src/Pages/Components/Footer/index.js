import React from 'react';
import './style.css';

function Footer() {
    return(
        <footer>
            <section className="footer">
			    <div className="footer_block">
				    <h5>ОКСАМИТ</h5>
				    <p>© 2007 ОКСАМИТ. Всі права захищено.<br/>
					<span>Зроблено Max Sh.</span>
				    </p>
			    </div>
			    <div className="adress">
				<p>oksamyt.derazhnya@gmail.com</p>
				<p>+38 038 563 01 55</p>
			    </div>
			    <ul>
				    <li><a href="">Facebook</a></li>
				    <li><a href="">Instagram</a></li>
				    <li><a href="">Telegram</a></li>
			    </ul>
		    </section>
        </footer>
    )
}
export default Footer;