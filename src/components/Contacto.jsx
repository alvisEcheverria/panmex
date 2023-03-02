import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = () => {

    const [ values, setValues ] = useState({ 
        name: '',
        number: '',
        email: '',
        subject: '',
        message: '',
    });     

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fpzpys9', 'template_pdeakuk', e.target, 'AwRqltbwZwBdMX1wF')
            .then(result => console.log(result))
            .catch(error => console.log(error))

        setValues({ 
        name: '',
        number: '',
        email: '',
        subject: '',
        message: '',
        });
    };

    return (
        <section id='contacto'>
            <div className='contact-container'>
                <div className='social'>
                    <a href="https://www.facebook.com/panmexoficial" target='_blank'><i className="fa-brands fa-facebook-f icon-cursor"></i></a>
                    <a href="https://twitter.com/PanmexOficial" target='_blank'><i className="fa-brands fa-twitter icon-cursor"></i></a>
                    <a href="https://www.instagram.com/panmexoficial/" target='_blank'><i className="fa-brands fa-instagram icon-cursor"></i></a>
                    <a href="#" target='_blank'><i className="fa-brands fa-whatsapp icon-cursor"></i></a>
                </div>
                <form onSubmit={sendEmail} className='contact-form'>
                    <h2 className='title-contact'>Contáctanos</h2>
                    <div className='form-item'>
                        <input placeholder='Tu nombre' required type="text" name="user_name" value={values.name} onChange={e => setValues({name: e.target.value})}/>
                        <input placeholder='Número' required type="number" name="user_number" value={values.number} onChange={e => setValues({number: e.target.value})}/>
                    </div>
                    <div className='form-item'>
                        <input placeholder='Tu correo' required type="email" name="user_email" value={values.email} onChange={e => setValues({email: e.target.value})}/>
                        <input placeholder='Asunto' requiered type='text' name="subject" value={values.subject} onChange={e => setValues({subject: e.target.value})}/>
                    </div>
                    <textarea className='message' placeholder='Inserte su mensaje' required name="message" rows={6} value={values.message} onChange={e => setValues({message: e.target.value})}/>  
                    <div className='btn-send-content'>
                        <button className='send-btn'>Enviar</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contacto;