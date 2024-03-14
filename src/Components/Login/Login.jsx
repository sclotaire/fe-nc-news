import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = ({setLoggedIn, setUsername, username}) => {
    
    const [usernameError, setUsernameError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const navigate = useNavigate()

    const handleOnClick = () => {
        setUsernameError('')
        setPasswordError('')

        if ('' === username){
            setUsernameError('Please enter your username')
            return
        }

        if (!/tickle122/.test(username)){
            setUsernameError('Please enter a valid username')
            return
        }

        if ('' === password){
            setPasswordError('Please enter a password')
        }

        if (password.length < 5){
            setPasswordError('Password must be at least 5 characters')
            return
        }

    }
    
    return (
        <div className="mainContainer">
            <div className="titleContainer">
                <p>Login</p>
            </div>
            <br />
            <div className="inputContainer">
                <input
                    value={username}
                    placeholder="Username"
                    onChange={(event) => setUsername(event.target.value)}
                    className="inputBox"
                    />
                    <label className="errorLabel">{usernameError}</label>
            </div>
            <br />
            <div className="inputContainer">
                <input
                    value={password}
                    placeholder = 'Password'
                    onChange={(event) => setPassword(event.target.value)}
                    className="inputBox"
                />
                <label className="errorLabel">{passwordError}</label>
            </div>
            <br />
            <div className="inputContainer">
                <input
                className="inputButton"
                type='button'
                onClick={handleOnClick}
                value='Log in'/>
            </div>
        </div>
    )
}

export default Login