import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import CategoryList from '../components/CategoryList';
import { fetchProducts, fetchCategories } from '../api';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchProducts().then(data => setProducts(data));
        fetchCategories().then(data => setCategories(data));
    }, []);

    return (
        <div>
            <CategoryList categories={categories} onSelect={categoryId => {
                setProducts(prevProducts => prevProducts.filter(product => product.categoryId === categoryId));
            }} />
            <ProductList products={products} />
        </div>
    );
};

export default Home;
