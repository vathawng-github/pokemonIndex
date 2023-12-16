import './Form.css';
import Header from '../../components/Header/Header';

import Email from '../../assets/email.jpeg';
import Go from '../../assets/go.jpeg';

import { useState, useContext, useEffect } from 'react';
import { APIURLContext } from "../../contexts/APIURLContext";

import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';




function Form() {
    const [inputs, setInputs] = useState({});
    const [email, setEmail] = useState("");
    const [ptypes, setPTypes] = useState([]);
    const apiURL = useContext(APIURLContext);

    const navigate = useNavigate();


    // console.log(`APIURL: ${apiURL}`);

    // useEffect(() => {setInputs(values => ({...values, [fieldName]: ptypes}))}, [ptypes]);

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        // Have state that holds array of types
        // Check if box is unchecked or checked
        console.log(event.target.checked);
        if (event.target.checked === true && event.target.name === "type") {
            setPTypes([...ptypes, event.target.value]);
            setInputs(values => ({...values, [fieldName]: ptypes}));
        } else if (event.target.name === "type") {
            let typeArray = ptypes;
            let index = typeArray.indexOf(event.target.value);
            typeArray.splice(index, 1);
            
            setPTypes(typeArray);
            setInputs(values => ({...values, [fieldName]: typeArray}));
        } else {
            return null;
        }
    }

    const handleEmail = (event) => {
       setEmail(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        let userData = {};
        userData.email = email;
        userData.type = ptypes;

        console.log(userData);

        const newResponse = await addNewUser(userData);
        // console.log(`New Response: ${newResponse.name}`);
        if (newResponse == null) {
            alert("Thank You!");
        } else {
            navigate(`/`);
        }
    }

    async function addNewUser(userAttributes) {
        try {
            let res = await axios.post(apiURL + "/api/v1/newUser", userAttributes);
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
                <img src = {Email} alt = "email" className = "joinImg" id = "emailImg" />
                <img src = {Go} alt = "Go" className = "joinImg" id = "goImg" />
                <div className='top'>
                    <h1>Join Now!</h1>
                    <p>Join now and receive updates about our collection!</p>
                </div>
                <form method = "post" action ="subscribe" onSubmit={handleSubmit}>
                    <h2>Enter your Email:</h2>
                    <input type = "email" id = "email" name = "email" placeholder='Your Email' onChange={handleEmail}></input>
                    <div className='checkbox'>
                        <h2>Types of Pokemon You Want To Watch</h2>
                        <div className = "check-section">
                            <label htmlFor ="Normal"><input type = "checkbox" id="type" name = "type" value = "Normal" onChange={handleChange}/>Normal</label>
                            <label htmlFor ="Fire"><input type = "checkbox" id="type" name = "type" value = "Fire" onChange={handleChange}/>Fire</label>
                            <label htmlFor ="Water"><input type = "checkbox" id="type" name = "type" value = "Water" onChange={handleChange}/>Water</label>
                            <label htmlFor ="Grass"><input type = "checkbox" id="type" name = "type" value = "Grass" onChange={handleChange}/>Grass</label>
                            <label htmlFor ="Electric"><input type = "checkbox" id="type" name = "type" value = "Electric" onChange={handleChange}/>Electric</label>
                            <label htmlFor ="Ice"><input type = "checkbox" id="type" name = "type" value = "Ice" onChange={handleChange}/>Ice</label>
                            <label htmlFor ="Fighting"><input type = "checkbox" id="type" name = "type" value = "Fighting" onChange={handleChange}/>Fighting</label>
                            <label htmlFor ="Poison"><input type = "checkbox" id="type" name = "type" value = "Poison" onChange={handleChange}/>Poison</label>
                        </div>
                        <div className = "check-section">
                            <label htmlFor ="Ground"><input type = "checkbox" id="type" name = "type" value = "Ground" onChange={handleChange}/>Ground</label>
                            <label htmlFor ="Flying"><input type = "checkbox" id="type" name = "type" value = "Flying" onChange={handleChange}/>Flying</label>
                            <label htmlFor ="Psychic"><input type = "checkbox" id="type" name = "type" value = "Psychic" onChange={handleChange}/>Psychic</label>
                            <label htmlFor ="Bug"><input type = "checkbox" id="type" name = "type" value = "Bug" onChange={handleChange}/>Bug</label>
                            <label htmlFor ="Rock"><input type = "checkbox" id="type" name = "type" value = "Rock" onChange={handleChange}/>Rock</label>
                            <label htmlFor ="Ghost"><input type = "checkbox" id="type" name = "type" value = "Ghost" onChange={handleChange}/>Ghost</label>
                            <label htmlFor ="Dark"><input type = "checkbox" id="type" name = "type" value = "Dark" onChange={handleChange}/>Dark</label>
                            <label htmlFor ="Dragon"><input type = "checkbox" id="type" name = "type" value = "Dragon" onChange={handleChange}/>Dragon</label>
                        </div>
                        <div className='check-section'>
                            <label htmlFor ="Steel"><input type = "checkbox" id="type" name = "type" value = "Steel" onChange={handleChange}/>Steel</label>
                            <label htmlFor ="Fairy"><input type = "checkbox" id="type" name = "type" value = "Fairy" onChange={handleChange}/>Fairy</label>
                        </div>
                    </div>
                    
                    <input type = "submit" id = "submit"></input>
                </form>
            </div>
        </>

    )
}

export default Form;