import React, { useState } from 'react';
import './styles/Busqueda.scss'


const Busqueda = () => {

    const [ulr, setUlr] = useState("https://picsum.photos/id/1/500/500");
    const [id, setId] = useState(1);


    const aumentar = () => {
        const number = Math.floor(Math.random() * 1001);
        const id = document.getElementById("id").value

        if (id != "") {
            const urls = `https://picsum.photos/id/${id}/500/500`
            setUlr(urls)
            setId(parseInt(id))
        } else {
            const urls = `https://picsum.photos/id/${number}/500/500`
            console.log(urls);
            setUlr(urls)
            setId(number)
        }
    }

    return (
        <div className="main">
            <div className="contenedorRandom">

                <h2>Solicita una imagen especifica</h2>
                <span>coloca el id de la foto que quieres buscar, estas vienda la {id}!</span>

                <label htmlFor="id">id:</label>
                <input type="number" id="id" />

                <div className="imgRandom"><img src={ulr} alt="imagen random" /></div>

                <button onClick={aumentar} className="btnRandom">buscar</button>

            </div>
        </div>
    );
}

export default Busqueda;