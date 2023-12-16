import Header from '../../components/Header/Header';
import './New.css';

import NewCard from '../../components/NewCard/NewCard';

import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { APIURLContext } from "../../contexts/APIURLContext";

function New () {

    const [ creatures, setCreatures ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState('');

    const apiURL = useContext(APIURLContext);
    console.log(apiURL);
    
    useEffect(() => {
        const loadCreatures = async () => {
            try {
                const response = await axios.get(`${apiURL}/api/v1/newCreatures`);
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
            <h1>Our New Collection</h1>
            <div className='card-container'>
                {creatures.map((card) => (
                    <NewCard 
                        name = {card.name} 
                        hp = {card.hp}
                        type = {card.type}
                        fav_attack = {card.fav_attack}
                        height = {card.height}
                        weight = {card.weight}
                    />
                ) )}
            </div>
        </>
        
    )
}

export default New;