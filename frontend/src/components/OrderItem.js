import React from 'react';
import { useDispatch } from 'react-redux';
import { removeOrderItem, updateOrderItem } from '../redux/orderSlice';

const OrderItem = ({ item, onQuantityChange }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeOrderItem(item.id));
    };

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (newQuantity >= 1) {
            dispatch(updateOrderItem({ id: item.id, count: newQuantity }));
            if (onQuantityChange) onQuantityChange(newQuantity);
        }
    };

    return (
        <div className="order-item">
            <h3>{item.productName}</h3>
            <p>Цена: ${item.price}</p>
            <input 
                type="number" 
                value={item.count} 
                onChange={handleQuantityChange}
                min="1"
            />
            <button onClick={handleRemove}>Удалить</button>
        </div>
    );
};

export default OrderItem;
