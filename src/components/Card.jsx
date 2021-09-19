import React from 'react';
import './styles/Card.scss'
import { ArrowUpRightSquare } from 'react-bootstrap-icons';

const Card = (props) => {
    return (
        <div className="card">
            <img className="cardImg" src={props.url} crossOrigin="anonymous" alt={props.id} />
            <div className="cardText">
                <p>autor:</p>
                <p className="letterPrimary">{props.autor}</p>
            </div>
            <div className="cardOriginalLink">
                <span>
                    <a href={props.original} target="_blank" rel="noopener noreferrer">
                        <ArrowUpRightSquare />
                    </a>
                </span>
            </div>
        </div>
    );
}

export default Card;