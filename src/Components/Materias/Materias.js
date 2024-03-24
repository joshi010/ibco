import React from "react";
import './materias.css';
import { materias } from "./maerias-db";

export default function Materias(){
    console.log(materias);
    console.log(Object.values(materias));
    let rand;
    return(
        <div className="pad">
            <h1>Materias IBCO</h1>
            <div>
                <p>El plan de estudios del IBCO consiste en tres bloques: básico, intermedio y avanzado. Los bloques consisten en trimestres y cada trimestre lleva sus respectivas materias.</p>
            </div>
            <div style={{marginTop:100}}>
                <h2>Plan de Estudios</h2>
                <div className="grid-materias-plan">
                    {Object.values(materias).map(x => {
                        return(
                            <div key={x.nombre} className="grid-row">
                                <div className="grid-materias-seccion">
                                    <h3>{x.nombre}</h3>
                                </div>
                                <div className="grid-materias-materias">
                                {x.materias.map((y, i) => {
                                    i%2 == 0 ? rand = '#cee7fb' : rand = '#b4dbfd'
                                    return(
                                        <div style={{backgroundColor: rand}} className="materia-materia">
                                            <p className="text-center">{y.nombre}</p>
                                        </div>
                                    )
                                })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}