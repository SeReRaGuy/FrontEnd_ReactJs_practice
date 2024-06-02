import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';

const products = [
    { id: 1, name: 'Компьютеры', description: 'Самые компьютеры - от офисных до профессиональных' },
    { id: 2, name: 'Комплекты "Клавиатуры + мышь"', description: 'Большое разнообразие комплектов' },
    { id: 3, name: 'Гарнитура', description: 'Гарнитура для любых задач' },
];

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductDetail;
