import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home(){
    return(
        <div className="pad">
            <div className="jumbotron">
                <div className="jumbo-in">
                    <h1 id="h1">¡Bienvenidos!</h1>
                    <p>El Instituto Bíblico Casa de Oración está muy contento de poner a su disposición esta herramienta de estudio.</p>
                </div>
            </div>

            <div className="acerca-de">
                <h2>Acerca del Instituto</h2>
                <div className="photo-text">
                    <div className="half-photo">
                        <img src="https://raw.githubusercontent.com/joshi010/betterstepsvideos/main/IBCO/2.png"></img>
                    </div>
                    <div className="half-text">
                        <p>El Instituto Bíblico Casa de Oración (IBCO) fue fundado en el año [AÑO] con la misión de [misión]. </p>
                        <p>Desde su fundación, han pasado más de 10 generaciones y se ha convertido en un centro de estudio donde predomina la Sana Doctrina y la buena enseñanza sobre la Palabra de Vida. Actualmente cuenta con dos modalidades (presencial y en línea) y dos diferentes horarios (matutino y vespertino). Si usted está interesado en inscribirse puede hacer click <Link className="link" to="/materias">aquí</Link>. </p>
                    </div>
                </div>
            </div>

            <div className="como-inscribirse acerca-de">
                <h2>¿Cómo Me Inscribo?</h2>
                <div>
                    <p className="text-center" >Antes de inscribirse debe estar consciente de las modalidades de estudio así como de los niveles a completar. Si usted ya consideró lo anteriormente mencionado, puede proceder a inscribirse <Link className="link" to="/insribir">aquí</Link>.</p>
                </div>
            </div>

            <div className="acerca-de final">
                <h2>¿Cómo Funciona?</h2>
                <div>
                    <p className="text-center">El IBCO tiene dos modalidades de estudio, presencial y en línea, las cuales funcionan de la siguiente manera:</p>
                </div>
                <div className="photo-text">
                    <div className="half-photo space" id="precencial">
                        <div className="texto-modos" id="text-precencial">
                            <h3>Presencial</h3>
                            <p className="text-center">Cada lunes y martes de la semana se llevan dos clases en las instalaciones de Casa de Oración a las cuales debe de asistir y tomar notas para que no acumule alguna falta. Las clases usualmente son de 6 a 8 de la tarde.</p>
                        </div>
                    </div>
                    <div className="half-photo space" id="en-linea">
                        <div className="texto-modos" id="text-en-linea">
                            <h3>En Línea</h3>
                            <p className="text-center">Cada miércoles o jueves, depende del día que se le asigne a su grupo, tendrá que escuchar las clases que se llevaron a cabo el lunes y martes y hacer notas respecto a cada clase. Tendrá que entregar estas notas a su coordinador cada semana y así tendrá su asistencia.</p>
                        </div>
                    </div>
                </div>

                <Link className="boton-link" to="materias">Ver Materias</Link>
            </div>

        </div>
    )
}