import React from 'react';
import Iframe from 'react-iframe';
import './style.css';

function ContactForm() {
    return(
    <section className="contact_form">
        <div className="contact_form_block">
		    <div className="contact_form_info">
			    <h1>Контактна інформація:</h1>
			    <p>Якщо ви обрали послугу для замовлення. 
					Будь-ласка, заповніть форму на правій стороні
				</p>
			    <span><b>Адреса:</b> Хмельницька обл., м.Деражня, вулиця Миру 55/1</span><br/>
			    <span><b>Телефон:</b>  +38 038 563 01 55</span><br/>
			    <span><b>Електронна пошта:</b>  oksamyt.derazhnya@gmail.com</span><br/>
		    </div>
            <div className="forms">
				<Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSdShrTTahJIr4QL8GVgpd3_wb9zqfpIFOevY0J24Eek-4LmqA/viewform?embedded=true"
					width="585" 
					height="950" 
					frameborder="0"
					marginheight="0" 
					marginwidth="0"
				/>
		    </div>
        </div>
	</section>
    )
}
export default ContactForm;