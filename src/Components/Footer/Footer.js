import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer(){
    return(
        <footer className="pad"> 
        <div className="footer">
            <div>
                <h3>
                    Páginas
                </h3>
                <ul>
                    <li><Link className="footer-link" to="/">Inicio</Link></li>
                    <li><Link className="footer-link" to="/materias">Materias</Link></li>
                    <li><Link className="footer-link" to="/contacto">Contacto</Link></li>
                    <li><Link className="footer-link" to="/inscribir">Inscríbete</Link></li>
                </ul>
            </div>
            <div>
                <h3>
                    Redes Sociales
                </h3>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/ibcooficial/" className="footer-link" target="_blank">Facebook</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>
                    Contacto
                </h3>
                <div className="gaps">
                    <p>Av. Colon 1547, Colonia Morelos, C. P. 44910, Guadalajara, Jalisco, México</p>
                    <p>+52 33 38 12 16 14</p>
                    <a className="footer-link" href="mailto:contacto@casadeoracionmexico.com">contacto@casadeoracionmexico.com</a>
                </div>
            </div>
        </div>
        </footer>
    )
}