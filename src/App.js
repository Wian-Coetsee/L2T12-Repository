import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Products from './components/Products';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import ShoppingCart from './components/ShoppingCart';
import './styles/App.css';

// Main App component
export default function App() {

    return (
        <Router>
            <div className="App">
                <Header />
                <Navigation />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/cart" element={<ShoppingCart />} />
                </Routes>
            </div>
        </Router>
    );
}
