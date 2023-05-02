import './Contribute.css';

import Header from '../../components/Header/Header';
import { useState, useContext } from 'react';
import axios from 'axios';

import { APIURLContext } from "../../contexts/APIURLContext";
import { Navigate, useNavigate } from 'react-router-dom';


function Contribute () {
    const [inputs, setInputs] = useState({});
    const apiURL = useContext(APIURLContext);
    const navigate = useNavigate();

    // console.log(`APIURL: ${apiURL}`);


    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setInputs(values => ({...values, [fieldName]: fieldValue}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        let contributeData = {};
        contributeData.name = inputs.name;
        contributeData.type = inputs.type;
        contributeData.hp = inputs.hp;
        contributeData.fav_attack = inputs.fav_attack;
        contributeData.height = inputs.height;
        contributeData.weight = inputs.weight;

        console.log(contributeData);

        const newResponse = await addToNewCollection(contributeData);
        // console.log(`New Response: ${newResponse.name}`);
        if (newResponse == null) {
            alert("Please complete the form.");
        } else {
            navigate(`/NewCollection`);
        }
    }

    async function addToNewCollection(pokemonAttributes) {
        try {
            let res = await axios.post(apiURL + "/newPokemon", pokemonAttributes);
            console.log(res.data);
            return res.data;
        } catch (err) {
            console.log(err);
            return null;
        }
    }
    return (
        <>
            <Header />
            <div className='container'>
                <h1>Contribute to our Collection!</h1>
                <p>Enter details about your Pokemon and add to our vast collection!</p>
                <form method = "POST" action = "contribute" id = "contribute-form" onSubmit={handleSubmit}>
                    <h2 className='attribute'>Your Pokemon's Attributes</h2>
                    <label htmlFor = "name">Name: <input type = "text" id = "name" name = "name" placeholder='Enter Name' onChange={handleChange}></input></label>
                    <label htmlFor = "type">Type: 
                        <select name = "type" id = "type" onChange={handleChange}>
                            <option value = "Normal">Normal</option>
                            <option value = "Fire">Fire</option>
                            <option value = "Water">Water</option>
                            <option value = "Grass">Grass</option>
                            <option value = "Electric">Electric</option>
                            <option value = "Ice">Ice</option>
                            <option value = "Fighting">Fighting</option>
                            <option value = "Poison">Poison</option>
                            <option value = "Ground">Ground</option>
                            <option value = "Flying">Flying</option>
                            <option value = "Psychic">Psychic</option>
                            <option value = "Bug">Bug</option>
                            <option value = "Rock">Rock</option>
                            <option value = "Ghost">Ghost</option>
                            <option value = "Dark">Dark</option>
                            <option value = "Dragon">Dragon</option>
                            <option value = "Steel">Steel</option>
                            <option value = "Fairy">Fairy</option>
                        </select>
                    </label>
                    <label htmlFor = "hp">HP: <input type = "text" id = "hp" name = "hp" placeholder = "Enter HP" onChange={handleChange}></input></label>
                    <label htmlFor = "fav-attack">Fav. Attack: <input type = "text" id = "fav_attack" name = "fav_attack" placeholder = "Enter Fav. Attack" onChange={handleChange}></input></label>
                    <label htmlFor = "height">Height: <input type = "text" id = "height" name = "height" placeholder = "Enter Height" onChange={handleChange}></input></label>
                    <label htmlFor = "weight">Weight: <input type = "text" id = "weight" name = "weight" placeholder = "Enter Weight" onChange={handleChange}></input></label>
                    {/* <label for ="image">Image: <input type = "file" id = "pokemon" name = "pokemon"></input></label> */}
                    <input type = "submit" id = "contribute-submit"></input>
                </form>
            </div>
        </>
    )
}

export default Contribute;