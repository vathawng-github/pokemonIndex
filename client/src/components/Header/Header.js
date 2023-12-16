import './Header.css';
import logo from '../../assets/transLogo.png';
import {Link} from "react-router-dom";

function Header() {
    return(
        <div className='Header-container'>
                <div className = "left">
                    <Link to = '/'>
                        <img src = {logo} alt = "logo" />
                    </Link>
                </div>
                <div className = "middle">
                    <h4><a href = {`/Browse`}>BROWSE</a></h4>
                    <h4><a href = {`/Contribute`}>CONTRIBUTE</a></h4>
                    {/* <h4><a href = {`/NewCollection`}>NEW</a></h4> */}
                </div>
                <div className = "right">
                    <h4><a href = {`/Login`}>LOG IN</a></h4>
                    <button type = "submit"><a href = {`/Form`}>JOIN</a></button>
                </div>
        </div>
    )
}

export default Header;