import './Contribute.css';

import Header from '../../components/Header/Header';

function Contribute () {
    return (
        <>
            <Header />
            <div className='container'>
                <h1>Contribute to our Collection!</h1>
                <p>Enter details about your Pokemon and add to our vast collection!</p>
                <form method = "POST" action = "contribute" id = "contribute-form">
                    <h2 className='attribute'>Your Pokemon's Attributes</h2>
                    <label for = "name">Name: <input type = "text" id = "pokemon" name = "pokemon" placeholder='Enter Name'></input></label>
                    <label for = "type">Type: 
                        <select name = "type" id = "type">
                            <option value = "normal">Normal</option>
                            <option value = "fire">Fire</option>
                            <option value = "water">Water</option>
                            <option value = "grass">Grass</option>
                            <option value = "electric">Electric</option>
                            <option value = "ice">Ice</option>
                            <option value = "fighting">Fighting</option>
                            <option value = "poison">Poison</option>
                            <option value = "ground">Ground</option>
                            <option value = "flying">Flying</option>
                            <option value = "psychic">Psychic</option>
                            <option value = "bug">Bug</option>
                            <option value = "rock">Rock</option>
                            <option value = "ghost">Ghost</option>
                            <option value = "dark">Dark</option>
                            <option value = "dragon">Dragon</option>
                            <option value = "steel">Steel</option>
                            <option value = "fairy">Fairy</option>
                        </select>
                    </label>
                    <label for = "hp">HP: <input type = "text" id = "pokemon" name = "pokemon" placeholder = "Enter HP"></input></label>
                    <label for = "fav-attack">Fav. Attack: <input type = "text" id = "pokemon" name = "pokemon" placeholder = "Enter Fav. Attack"></input></label>
                    <label for = "height">Height: <input type = "text" id = "pokemon" name = "pokemon" placeholder = "Enter Height"></input></label>
                    <label for = "weight">Weight: <input type = "text" id = "pokemon" name = "pokemon" placeholder = "Enter Weight"></input></label>
                    {/* <label for ="image">Image: <input type = "file" id = "pokemon" name = "pokemon"></input></label> */}
                    <input type = "submit" id = "contribute-submit"></input>
                </form>
            </div>
        </>
    )
}

export default Contribute;