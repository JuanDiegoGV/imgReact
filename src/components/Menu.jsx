import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return ( 
        <div className="menu">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Random">Random</Link></li>
                <li><Link to="/Busqueda">Busqueda</Link></li>
                <li><Link to="/Palabra">Palabra</Link></li>
            </ul>
        </div>
     );
}
 
export default Menu;