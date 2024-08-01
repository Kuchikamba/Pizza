import React from 'react';
import Product from './Product';
import AddProduct from './AddProduct';

class Products extends React.Component{
  constructor(props){
    super(props);
    this.state =[
      {
        id: 1,
        name: 'Product 1',
        price: 100,
        description: 'Description 1',
        categoryId: 1
      }
    ]
    
  }
  render(){
    return(
      <div>
        <h1>Products</h1>
        <AddProduct onAddProduct={this.addProduct} />
        <div className='products'>
          {
            this.state.map((product) => {
              return <Product key={product.id} product={product} />
            })
          }
        </div>
      </div>
    )
  }
  addProduct(product){
    const id = this.state.length + 1;
    this.setState({
      products: [...this.state, {id, product}]
    })
  }
}
export default Products;