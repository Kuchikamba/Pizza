import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, addToOrder }) => {
    return (
        <div>
            {products.map(product => (
                <ProductItem key={product.id} product={product} addToOrder={addToOrder} />
            ))}
        </div>
    );
};

export default ProductList;
