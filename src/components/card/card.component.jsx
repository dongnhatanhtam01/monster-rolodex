import React from 'react';
import './card.styles.css'
// function Card () {
//     return (<i class="fas fa-h1    "></i>) 
// }

export const Card = (props) => {
    console.log(props)
    return (<div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster" />
        <h1> {props.monster.name} </h1>
        <p>{props.monster.email}</p>
    </div>)
}