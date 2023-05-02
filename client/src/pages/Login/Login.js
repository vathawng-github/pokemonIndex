import Header from '../../components/Header/Header';
import './Login.css';

function Login() {
    return(
        <>
            <Header />
            <div className='login-container'>
                <form method = "post" id = "login-form">
                    <label for = 'username'>Username:
                        <input 
                        type='text' 
                        name = "username"
                        />
                    </label>
                    <label for ='password'>Password: 
                        <input
                        type = "text"
                        name='password'
                        />
                    </label>
                </form>   
            </div>
        </>
    )
}

export default Login;