import React from "react";
import './contacto.css';
import Loading from "../../loading";
export default function Contacto(props){

    return(
        <div className="pad">
            <h1>Contacto</h1>
            <div className="flex-middle">
                <div className="half-half">
                    <h2>Télefono de Contacto</h2>
                    <div>
                        <p>{props.telefono}</p>
                        <a className="link" href="mailto:contacto@casadeoracionmexico.com">contacto@casadeoracionmexico.com</a>
                    </div>
                </div>
                <div className="half-half">
                    <h2>Ubicación</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.294291452127!2d-103.36329802497919!3d20.657602780900493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae101bf83139%3A0x152e35011765d93e!2sCasa%20de%20Oraci%C3%B3n%20M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1711217682929!5m2!1ses-419!2smx" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </div>
    )
}