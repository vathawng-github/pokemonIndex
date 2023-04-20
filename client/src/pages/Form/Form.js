import './Form.css';
import Header from '../../components/Header/Header';

import Email from '../../assets/email.jpeg';
import Go from '../../assets/go.jpeg';

function Form() {
    return (
        <>
            <Header />
            <div className='container'>
                <img src = {Email} alt = "email" class = "joinImg" id = "emailImg" />
                <img src = {Go} alt = "Go" class = "joinImg" id = "goImg" />
                <div className='top'>
                    <h1>Join Now!</h1>
                    <p>Join now and receive updates about our collection!</p>
                </div>
                <form method = "post" action ="subscribe">
                    <h2>Enter your Email:</h2>
                    <input type = "email" id = "email" name = "email" placeholder='Your Email'></input>
                    <div className='checkbox'>
                        <h2>Types of Pokemon You Want To Watch</h2>
                        <div className = "check-section">
                            <label for ="Normal"><input type = "checkbox" id="type" name = "type" value = "Normal" />Normal</label>
                            <label for ="Fire"><input type = "checkbox" id="type" name = "type" value = "Fire" />Fire</label>
                            <label for ="Water"><input type = "checkbox" id="type" name = "type" value = "Water" />Water</label>
                            <label for ="Grass"><input type = "checkbox" id="type" name = "type" value = "Grass" />Grass</label>
                            <label for ="Electric"><input type = "checkbox" id="type" name = "type" value = "Electric" />Electric</label>
                            <label for ="Ice"><input type = "checkbox" id="type" name = "type" value = "Ice" />Ice</label>
                            <label for ="Fighting"><input type = "checkbox" id="type" name = "type" value = "Fighting" />Fighting</label>
                            <label for ="Poison"><input type = "checkbox" id="type" name = "type" value = "Poison" />Poison</label>
                        </div>
                        <div className = "check-section">
                            <label for ="Ground"><input type = "checkbox" id="type" name = "type" value = "Ground" />Ground</label>
                            <label for ="Flying"><input type = "checkbox" id="type" name = "type" value = "Flying" />Flying</label>
                            <label for ="Psychic"><input type = "checkbox" id="type" name = "type" value = "Psychic" />Psychic</label>
                            <label for ="Bug"><input type = "checkbox" id="type" name = "type" value = "Bug" />Bug</label>
                            <label for ="Rock"><input type = "checkbox" id="type" name = "type" value = "Rock" />Rock</label>
                            <label for ="Ghost"><input type = "checkbox" id="type" name = "type" value = "Ghost" />Ghost</label>
                            <label for ="Dark"><input type = "checkbox" id="type" name = "type" value = "Dark" />Dark</label>
                            <label for ="Dragon"><input type = "checkbox" id="type" name = "type" value = "Dragon" />Dragon</label>
                        </div>
                        <div className='check-section'>
                            <label for ="Steel"><input type = "checkbox" id="type" name = "type" value = "Steel" />Steel</label>
                            <label for ="Fairy"><input type = "checkbox" id="type" name = "type" value = "Fairy" />Fairy</label>
                        </div>
                    </div>
                    
                    <input type = "submit" id = "submit"></input>
                </form>
            </div>
        </>

    )
}

export default Form;