// Import statements and setup
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

// Component definition
const Navigation = () => {
  // Select user state from Redux
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  // Logout handler
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  // JSX for rendering the navigation bar
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
      <Link to="/cart">Cart</Link>
      {user ? (
        <div className="user-info">
          <span>Welcome, {user.username}!</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}
      <Link to="/Register">Register</Link>
    </nav>
  );
};

export default Navigation;
