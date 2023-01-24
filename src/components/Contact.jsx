import React from "react";
import { Footer } from "./Footer";
import "./styles/Contact.css";

class Contact extends React.Component {
    render() {
        return (
            <>
                <section className="contact" id="contact">
                    <div className="map">
                        <h1>Contáctame</h1>
                        <span>¿Tienes un proyecto? Yo puedo ayudarte, sólo envíame un mensaje📩</span>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114905.21306001527!2d-97.58498430292978!3d25.843533202948187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866f94c793d10087%3A0x732178703913ca5e!2sHeroica%20Matamoros%2C%20Tamps.!5e0!3m2!1ses-419!2smx!4v1672077993250!5m2!1ses-419!2smx" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </div>
                    <div className="form-contact">
                        <form name="contact-form" netlify>
                            <label htmlFor="name">Nombre:</label>
                            <input type="text" name="name" id="name" />
                            <label htmlFor="email">E-mail:</label>
                            <input type="text" name="email" id="email" />
                            <label htmlFor="message">Mensaje:</label>
                            <textarea name="message" id="message" cols={60} rows={15} defaultValue={""} />
                            <input type="submit" defaultValue="Send Message" className="submit-button" />
                        </form>
                    </div>
                </section>
                <Footer />
            </>
        );
    }
}

export { Contact };