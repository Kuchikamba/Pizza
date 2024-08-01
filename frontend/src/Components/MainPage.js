import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const MainPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Current location is ', location);
  }, [location]);

  return (
    <>
      <nav>
        <ul>
          <header>
          <li>
            <button onClick={() => navigate('products', { replace: false })}>
              Главная
            </button>
          </li>
          <li>
            <button onClick={() => navigate('categories', { replace: false })}>
              Категории
            </button>
          </li>
          <li>
            <button onClick={() => navigate('orders', { replace: false })}>
              Заказы
            </button>
          </li>
          </header>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  )
};

export default MainPage;