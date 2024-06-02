import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from './Products';
import Home from './Home';
import './styles.css';

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </div>
    );
};

export default Main;