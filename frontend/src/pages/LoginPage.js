import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import routes from '../routes';

const LoginPage = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const onSubmit = (data) => {
        login(data).then(() => {
            navigate(routes.HOME);
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
            <button type="submit">Войти</button>
        </form>
    );
};

export default LoginPage;
