import React from 'react';


class Product extends React.Component {

  render(){
    return (
      <div className='product'>
        <h1>Product {this.props.product.id}</h1>
        <p>Название {this.props.product.name} </p>
        <p>Цена {this.props.product.price} </p>
        <p>Описание {this.props.product.description} </p>
        <p>Категория {this.props.product.categoryId} </p>
      </div>
    )
  }
}
export default Product;