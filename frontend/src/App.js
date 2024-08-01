import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage';
import React from 'react';
import Orders from './Components/Orders';
import Products from './Components/Products';
import Categories from './Components/Categories';

class App extends React.Component {

  
  render(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} >
            <Route index element={<div>No page is selected.</div> } />
            <Route path="products" element={<Products />} />
            <Route path="categories" element={<Categories />} />
            <Route path="orders" element={<Orders />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

  
}

export default App;