import "../App.css";

const Header =()=> {
    return(
        <div>
            <ul className="header">
                <li><a href="#home">Inicio</a></li>
                <li><a href="#knowledge">Conocimientos</a></li>
                <li><a href="#proyects">Proyectos</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </div>
    )
};

export default Header;