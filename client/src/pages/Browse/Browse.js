import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import './Browse.css';

import { useState, useEffect } from 'react';
import axios from 'axios';

function Browse() {
    // Set up initial state of state variables
    const [ creatures, setCreatures ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState('');

    useEffect(() => {
        const loadCreatures = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/creatures`);
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