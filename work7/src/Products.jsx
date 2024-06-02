import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const products = [
    { id: 1, name: 'Компьютеры' },
    { id: 2, name: 'Комплекты "Клавиатуры + мышь"' },
    { id: 3, name: 'Гарнитура' },
];

const Products = () => {
    return (
        <div className="products-container">
            <h1>Товары</h1>
            <ul className="products-list">
                {products.map(product => (
                    <li key={product.id} className="product-item">
                        <Link to={`/products/${product.id}`} className="product-link">{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
