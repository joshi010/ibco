import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div style={{height:"70vh", textAlign:'center'}}>
            <h2>Página No Existe. error 404.</h2>
            <Link style={{paddingTop:50}}>volver a inicio</Link>
        </div>
    )
}