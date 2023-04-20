import { useState, useEffect } from 'react';


import './Card.css';
import Pikachu from '../../assets/pikachu.png';

function Card ( {name, hp, image, type, fav_attack, height, weight}) {
    return (
        <div className = "card">
            <div className = "title">
                <h4>{name}</h4>
                <h4>HP: {hp}</h4>
            </div>
            <div className = "cardImage">
                <img src ={image} alt = "pikachu" />
            </div>
            <div className = "details">
                <h4>- Type: {type}</h4>
                <h4>- Fav. Attack: {fav_attack}</h4>
                <h4>- Height: {height}</h4>
                <h4>- Weight: {weight}</h4>
            </div>
        </div>
    )
}

export default Card;