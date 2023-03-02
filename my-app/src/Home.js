import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { login } from './spotify';

const Home = () => {
    const navigate = useNavigate();
    const [forceLogin, setForceLogin] = useState(false);

    const handleLogin = () => {
        login();
    };

    const handleContinueAsGuest = () => {
        navigate('/select', { state: { forceLogin } });
    };

    const handleCheckboxChange = (event) => {
        setForceLogin(event.target.checked);
    };

    return (
        <div>
            <h1>Welcome to the Spotify Quiz!</h1>
            <p>Please log in with your Spotify account to start the quiz.</p>
            <button onClick={handleLogin}>Login with Spotify</button>
            <br />
            <br />
            <input type="checkbox" checked={forceLogin} onChange={handleCheckboxChange} />
            <label htmlFor="force-login">Force login for testing</label>
            <br />
            <button onClick={handleContinueAsGuest}>Continue as Guest</button>
        </div>
    );
};

export default Home;
