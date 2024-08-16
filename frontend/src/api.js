import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/v1', 
});

export const fetchProducts = () => api.get('/products').then(res => res.data);
export const fetchCategories = () => api.get('/categories').then(res => res.data);
export const fetchProductsByCategory = (categoryId) => api.get(`/products?categoryId=${categoryId}`).then(res => res.data);
export const fetchOrders = () => api.get('/orders').then(res => res.data);
export const createOrder = (order) => api.post('/orders', order);
export const registerUser = (user) => api.post('/users/registration', user);
export const loginUser = (credentials) => api.post('/users/login', credentials);
export const logoutUser = () => api.post('/users/logout');
