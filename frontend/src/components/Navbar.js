import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import routes from '../routes';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate(routes.HOME);;
    };;

    return (
        <nav>
            <Link to={routes.HOME}>Главная</Link>
            <Link to={routes.ORDER}>Корзина</Link>
            {user ? (
                <>
                    <span>Здравствуйте, {user.username}</span>
                    <button onClick={handleLogout}>Выйти</button>
                </>
            ) : (
                <>
                    <Link to={routes.LOGIN}>Вход</Link>
                    <Link to={routes.REGISTER}>Регистрация</Link>
                </>
            )}
        </nav>
    );
};

export default Navbar;
