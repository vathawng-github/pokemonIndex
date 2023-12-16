import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import './Browse.css';

import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { APIURLContext } from "../../contexts/APIURLContext";

function Browse() {
    // Set up initial state of state variables
    const [ creatures, setCreatures ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState('');

    const apiURL = useContext(APIURLContext);
    console.log(apiURL);
    
    useEffect(() => {
        const loadCreatures = async () => {
            try {
                const response = await axios.get(`${apiURL}/api/v1/creatures`);
                console.log(response.data);
                setCreatures( (creatures) => [...response.data]);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setError(err.message);
                console.log(err);
            }
        };
        setLoading(true);
        loadCreatures();
    }, []);

    return(
        <>
            <Header />
            <div className='card-container'>
                {creatures.map((card) => (
                    <Card 
                        name = {card.name} 
                        hp = {card.hp}
                        image = {card.image}
                        type = {card.type}
                        fav_attack = {card.fav_attack}
                        height = {card.height}
                        weight = {card.weight}
                    />
                ) )}
            </div>
        </>
        
    )
};

export default Browse;