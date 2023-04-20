import Header from "../../components/Header/Header";
import './Home.css';
import charizard from "../../assets/charizard.jpeg";


function Home() {
    return (
        <div>
            <Header />
            <div className = "main">
                <div className = "blueCircle"></div>
                <div className = "yellowCircle"></div>
                <div className = "redCircle"></div>
                <h1>Pokemon Index</h1>
                <p>Pokemon Index is a cloud service designed to be a home for all Pokemon lovers to gather.</p>
                <img src = {charizard} alt = "charizard" id = "charizard"/>
                <h1>Our Collection</h1>
                <p>Browse our grand collection of Pokemon!</p>
            </div>
            <div className = "card-container">
                <div className = "card">
                    <div className = "title">
                        <h4>Pikachu</h4>
                        <h4>HP: 35</h4>
                    </div>
                    <div className = "cardImage">
                        <img src ="https://storage.googleapis.com/sp23-41200-pokemon-images/pikachu.png" alt = "pikachu" />
                    </div>
                    <div className = "details">
                        <h4>- Type: Electric</h4>
                        <h4>- Fav. Attack: Thundershock</h4>
                        <h4>- Height: 1'4 in</h4>
                        <h4>- Weight: 13 lbs</h4>
                    </div>
                </div>
                <div className = "card">
                    <div className = "title">
                        <h4>Charizard</h4>
                        <h4>HP: 78</h4>
                    </div>
                    <div className = "cardImage">
                        <img src ="https://storage.googleapis.com/sp23-41200-pokemon-images/charizard.png" alt = "charizard" />
                    </div>
                    <div className = "details">
                        <h4>- Type: Fire</h4>
                        <h4>- Fav. Attack: Fire Spin</h4>
                        <h4>- Height: 5'7 in</h4>
                        <h4>- Weight: 200 lbs</h4>
                    </div>
                </div>
                <div className = "card">
                    <div className = "title">
                        <h4>Arcanine</h4>
                        <h4>HP: 90</h4>
                    </div>
                    <div className = "cardImage">
                        <img src ="https://storage.googleapis.com/sp23-41200-pokemon-images/arcanine.png" alt = "arcanine" />
                    </div>
                    <div className = "details">
                        <h4>- Type: Fire</h4>
                        <h4>- Fav. Attack: Heat Blast</h4>
                        <h4>- Height: 6'3 in</h4>
                        <h4>- Weight: 241 lbs</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;