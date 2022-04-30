/* import { 
    FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaDatabase, FaPhp, FaWordpress, FaMarkdown,
    FaBootstrap, FaSass, FaReact, FaFlask,
    FaRegStickyNote, FaTrello, FaGit, FaGithub, FaCode, FaEdit, FaFileExcel, FaFilePowerpoint, FaFileWord
} from "react-icons/fa"; */

import {useState} from "react";
import Info from "./info.js";
import data from "../helpers/data.js";

import "../App.css"

const Skills =()=> {
    const [skills] = useState(data);
    return(
        <><h2>Conocimientos</h2>
        <div  className="skill_div">
            {skills.map((skill)=>{
                return(
                    <div>
                    <Info 
                        name={skill.name}
                        type={skill.type}
                    />
                    </div>
                )
            })}
        </div></>
    )
};

export default Skills;