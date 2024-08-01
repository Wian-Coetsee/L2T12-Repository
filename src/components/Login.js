// Import statements and setup
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';
import '../styles/Login.css';

// Component definition
const Login = () => {
    // State hooks
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Hooks for dispatch and navigation
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Selector for user state from Redux
    const user = useSelector(state => state.user.user);

    // Effect hook to redirect if user is already logged in
    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    // Form submission handler
    const handleLogin = (e) => {
        e.preventDefault();

        // Retrieve and validate user credentials
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.username === username && storedUser.password === password) {
            dispatch(login({ username }));
            localStorage.setItem('loggedInUser', JSON.stringify({ username }));
            navigate('/');
        } else {
            setError('Invalid username or password');
        }
    };

    // JSX for rendering the component
    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Username:</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {user && (
                <div className="welcome-message">
                    <p>Welcome back, {user.username}!</p>
                </div>
            )}
        </div>
    );
};

export default Login;
