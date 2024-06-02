import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Главная страница</Link>
                </li>
                <li>
                    <Link to="/products">Товары</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;