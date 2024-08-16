import React from 'react';
import { useForm } from 'react-hook-form';
import { registerUser } from '../api';
import { useNavigate } from 'react-router-dom';
import routes from '../routes';

const RegisterPage = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        registerUser(data).then(() => {
            navigate(routes.LOGIN);
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Имя пользователя:</label>
                <input {...register('username', { required: true })} />
            </div>
            <div>
                <label>Пароль:</label>
                <input type="password" {...register('password', { required: true })} />
            </div>
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
};

export default RegisterPage;
