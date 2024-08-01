// Import statements and setup
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

// Main Register component
export default function Register() {
    // State variables for form fields and error message
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Handle form submission
    const handleRegister = (e) => {
        e.preventDefault();
        
        // Validation checks
        if (!name || !surname || !username || !email || !password || !confirmPassword) {
            setError('All fields are required');
            return;
        }

        if (!validateEmail(email)) {
            setError('Invalid email address');
            return;
        }

        if (!validatePassword(password)) {
            setError('Password must be more than 8 characters, include at least 1 number, 1 capital letter, and 1 special character');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Save user data (e.g., to localStorage or backend)
        localStorage.setItem('user', JSON.stringify({ name, surname, username, email, password }));
        navigate('/login');
    };

    // Email validation function
    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    // Password validation function
    const validatePassword = (password) => {
        return /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,}$/.test(password);
    };

    // JSX for rendering the registration form
    return (
        <div className="register-container">
            <h2>Register</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleRegister}>
                {/* Form fields for name, surname, username, email, password, and confirm password */}
                <div className="form-group">
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Surname:</label>
                    <input 
                        type="text" 
                        value={surname} 
                        onChange={(e) => setSurname(e.target.value)} 
                        required 
                    />
                </div>
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
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
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
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input 
                        type="password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
