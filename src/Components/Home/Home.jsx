import { Link, useNavigate } from "react-router-dom";
import React from "react";

const Home = (props) => {
    const {loggedIn, username} = props

    const handleOnClick = () => {
    }


return (
        <div>
            <div className='buttomContainer'>
                <Link to='/login'>
                <input
                    className='inputButton'
                    type="button"
                    onClick={handleOnClick}
                    value={loggedIn ? 'Log out' : 'Log in'}
                />
                {loggedIn ? <p>Logged in as {username}</p> : null}
                </Link>
            </div>
        </div>
)
}

export default Home