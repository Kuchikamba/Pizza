import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import OrderPage from './pages/OrderPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';
import routes from './routes';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path={routes.HOME} element={<Home />} />
                    <Route path={routes.CATEGORY} element={<CategoryPage />} />
                    <Route path={routes.ORDER} element={<OrderPage />} />
                    <Route path={routes.REGISTER} element={<RegisterPage />} />
                    <Route path={routes.LOGIN} element={<LoginPage />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
