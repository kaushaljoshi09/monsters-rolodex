import React from "react";

import './Card.css';

export const Card = (props) => {

    return (
        <div className="card-container">
            <img className="card-image-size" alt='monster' src={`https://robohash.org/${  props.monster.id  }?set=set2`} />
            <h1>{ props.monster.name }</h1>
        </div>
    );
}