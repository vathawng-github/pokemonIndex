import './NewCard.css';


function NewCard( {name, hp, type, fav_attack, height, weight} ) {
    return(
        <div className = "card">
            <div className = "title">
                <h4 className='new-name'>{name}</h4>
                <h4>HP: {hp}</h4>
            </div>
            <div className = "cardImage">
                <img src = "https://storage.googleapis.com/sp23-41200-pokemon-images/egg.png" alt = "oh" id = "oh"/>
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

export default NewCard;