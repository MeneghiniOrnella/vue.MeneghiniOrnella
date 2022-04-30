import "../App.css";
import React, { useState } from "react";

const Card =(props)=> {
    return(
        <div>
            <h2>Proyectos</h2>
            <ul>
                <li>{props.name}</li>
                <li>{props.github}</li>
                <li>{props.tech}</li>
                <li>{props.description}</li>
            </ul>
        </div>
    )
}

export default Card;