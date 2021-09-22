import React, { useState, useEffect } from 'react';
import Card from './Card';
import './styles/Inicio.scss'

const Inicio = (props) => {

    const [data, setData] = useState([])
    const [page, setPage] = useState(props.pagina)

    useEffect(() => {
        consulta()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    async function consulta() {
        const query = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`).then(Response => Response.json())
        setData(query)
    }

    const aumentar = () => {
        setPage(page + 1)
    }

    const decrementar = () => {
        setPage(page - 1)
    }

    return (
        <div className="main">
            <div className="contenedorInicio">
                <ul>
                    {
                        data.map(photo => (
                            <li key={photo.id}>
                                <Card url={photo.download_url} id={photo.id} autor={photo.author} original={photo.url} />
                            </li>
                        ))
                    }
                </ul>

                <div className="paginacionInicio">
                    <button className="btnPaginacion letterSecondary" onClick={decrementar} disabled={page === 1 ? true : false}>anterior</button>
                    <span>{page}/101</span>
                    <button className="btnPaginacion letterSecondary" onClick={aumentar} disabled={page === 101 ? true : false}>siguiente</button>
                </div>
            </div>
        </div>
    );
}

export default Inicio;