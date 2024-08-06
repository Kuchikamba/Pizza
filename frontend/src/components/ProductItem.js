import { useState } from 'react';

const ProductItem = ({ product, addToOrder }) => {
    const [quantity, setQuantity] = useState(1);

    const handleAddToOrder = () => {
        addToOrder(product, quantity);
        setQuantity(1); 
    };

    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <input 
                type="number" 
                value={quantity} 
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                min="1"
            />
            <button onClick={handleAddToOrder}>Добавить в заказ</button>
        </div>
    );
};

export default ProductItem;
