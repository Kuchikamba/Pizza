import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import OrderItem from '../components/OrderItem';
import { createOrder } from '../api';  
import { clearOrder } from '../redux/orderSlice'; 
import routes from '../routes';

const OrderPage = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const orderItems = useSelector(state => state.order.items);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const totalPrice = orderItems.reduce((sum, item) => sum + item.price * item.count, 0);
        setTotal(totalPrice);
    }, [orderItems]);

    const onSubmit = async (data) => {
        const order = {
            userId: 1, 
            address: data.address,
            comment: data.comment,
            items: orderItems,
        };

        try {
            await createOrder(order);
            dispatch(clearOrder()); 
            navigate(routes.HOME); 
        } catch (error) {
            console.error("Ошибка при оформлении заказа:", error);
        }
    };

    return (
        <div>
            <h2>Корзина</h2>
            {orderItems.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <div>
                    {orderItems.map(item => (
                        <OrderItem key={item.id} item={item} />
                    ))}
                    <h3>Итоговая стоимость: ${total.toFixed(2)}</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Адрес:</label>
                            <input 
                                {...register('address', { required: true })} 
                                placeholder="Введите адрес" 
                            />
                        </div>
                        <div>
                            <label>Комментарий:</label>
                            <textarea {...register('comment')} placeholder="Добавьте комментарий (необязательно)" />
                        </div>
                        <button type="submit">Оформить заказ</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default OrderPage;
