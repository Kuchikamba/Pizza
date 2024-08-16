import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { fetchProductsByCategory } from '../api';

const CategoryPage = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProductsByCategory(id).then(data => setProducts(data));
    }, [id]);

    return (
        <div>
            <h2>Категория {id}</h2>
            <ProductList products={products} />
        </div>
    );
};

export default CategoryPage;
