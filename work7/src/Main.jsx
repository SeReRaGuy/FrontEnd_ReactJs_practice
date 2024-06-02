import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles.css';

const Home = lazy(() => import('./Home'));
const Products = lazy(() => import('./Products'));
const ProductDetail = lazy(() => import('./ProductDetail'));

const Main = () => {
    return (
        <div>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default Main;
