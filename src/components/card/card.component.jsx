import React from 'react'
import './card-styles.css';

export const Card = (props) => {
    return (
        <div className="card-container">
          <img alt="Monster" src={`https://robohash.org/${props.monster.id}ABC.png?set=set2&size=150x150`}></img>
          <h2>{props.monster.name}</h2> 
          <p>{props.monster.email}</p>
        </div>
    );
}
