import React, { useState } from 'react';
import './styles/Palabra.scss'

const Palabra = () => {

    const [ulr, setUlr] = useState("https://picsum.photos/seed/picsum/200/300");
    const [actual, setactual] = useState("picsum");


    const aumentar = () => {
        
        const palabra = document.getElementById("palabra").value

        if (palabra != "") {
            const urls = `https://picsum.photos/seed/${palabra}/200/300`
            setUlr(urls)
            setactual(palabra)
        } else {
            const urls = `https://picsum.photos/seed/picsum/200/300`
            setUlr(urls)
        }
    }

    return (
        <div className="main">
            <div className="contenedorRandom">

                <h2>Genera una imagen unica a partir de una palabra</h2>
                <span>escribe la palabra que quieras, estas viendo la palabra: {actual}</span>

                <label htmlFor="palabra">palabra:</label>
                <input type="text" id="palabra" />

                <div className="imgRandom"><img src={ulr} alt="imagen random" /></div>

                <button onClick={aumentar} className="btnRandom">buscar</button>

            </div>
        </div>
    );
}

export default Palabra;