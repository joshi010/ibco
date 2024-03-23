import React, { useState } from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";

export default function Nav(){
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    }

    return(
        <>
        <nav>
            <div className="imagen">
                <img src="https://raw.githubusercontent.com/joshi010/betterstepsvideos/main/IBCO/logo-colored.png"></img>
            </div>
        </nav>
        <nav className="nav-2">
            <div className="imagen">
            <NavLink style={{padding: 0, margin:0}} to={'/'}><img src="https://raw.githubusercontent.com/joshi010/betterstepsvideos/main/IBCO/logo-colored.png"></img></NavLink>
            </div>
            <div className="hamburger" onClick={handleClick}>
                <div className="line-ham"></div>
                <div className="line-ham"></div>
                <div className="line-ham"></div>
            </div>
            <div className="links">
                <NavLink to="/">INICIO</NavLink>
                <NavLink to="/materias">MATERIAS</NavLink>
                <NavLink to="/contacto">CONTACTO</NavLink>
                <NavLink id="inscribir" to="/inscribir">INSCRÍBETE</NavLink>
            </div>
        </nav>

        <div className={`${active ? 'active' : null} ham-links`}>
                <NavLink onClick={() => setActive(!active)} to="/">INICIO</NavLink>
                <NavLink onClick={() => setActive(!active)} to="/materias">MATERIAS</NavLink>
                <NavLink onClick={() => setActive(!active)} to="/contacto">CONTACTO</NavLink>
                <NavLink onClick={() => setActive(!active)} id="inscribir" to="/inscribir">INSCRÍBETE</NavLink>
            </div>
        </>
        
    )
}