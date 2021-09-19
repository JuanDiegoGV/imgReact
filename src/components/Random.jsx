import React, { useState, useEffect } from 'react';
import './styles/Random.scss';

const Random = () => {

    const [ulr, setUlr] = useState("https://picsum.photos/500/500");


    const aumentar = () => {
        const number = Math.random();
        const ancho = document.getElementById("ancho").value
        const alto = document.getElementById("alto").value

        if (ancho != "" || alto != "") {
            const urls = `https://picsum.photos/${ancho}/${alto}?random=${number}`
            setUlr(urls)
        } else {
            const urls = `https://picsum.photos/500/500?random=${number}`
            setUlr(urls)
        }
    }

    return (
        <div className="main">
            <div className="contenedorRandom">

                <h2>Solicita una imagen random</h2>
                <span>por defecto el valor es 500x500, si coloca solo un valor la imagen sera cuadrada</span>

                <label htmlFor="ancho">ancho:</label>
                <input type="number" id="ancho" />

                <label htmlFor="alto">alto:</label>
                <input type="number" id="alto" />

                <div className="imgRandom"><img src={ulr} alt="imagen random" /></div>

                <button onClick={aumentar} className="btnRandom">random</button>

            </div>
        </div>
    );
}

export default Random;