import React, { useState } from "react";

const Info =(props)=> {
    return(
        <div className="skills">
            <ul>
                {/* <li className="typeSkill">{props.type}</li> */}
                <li className="nameSkill">{props.name}</li>
            </ul>
            
        </div>
    )
};

export default Info;