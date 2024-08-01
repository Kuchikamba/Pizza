import React from 'react';

class AddProduct extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      product: [
        {
          id: 0,
          name: '',
          price: 0,
          description: '',
          categoryId: ''
        }
      ]
    }
  }
  render(){
    return(
      <div>
        <h1>AddProduct</h1>
        <form>
          <label>
            <input placeholder='id продукта' type="text" name="id" onChange={(e) => this.setState({id: e.target.value})}/>
          </label>
          <label>
            <input placeholder = 'название' type="text" name="name" onChange={(e) => this.setState({name: e.target.value})}/>
          </label>
          <label>
            <input placeholder = 'цена' type="text" name="price" onChange={(e) => this.setState({price: e.target.value})}/>
          </label>
          <label>
            <input placeholder = 'описание' type="text" name="description" onChange={(e) => this.setState({description: e.target.value})}/>
          </label>
          <label>
            <input placeholder='категория' type="text" name="categoryId" onChange={(e) => this.setState({categoryId: e.target.value})}/>
          </label>
          <button  type="submit" onClick = {() => this.props.onAddProduct({
            id: this.state.id,
            name: this.state.name,
            price: this.state.price,
            description: this.state.description,
            categoryId: this.state.categoryId,
          })}>
          добавить
          </button>
        </form>
      </div>
    )
  }
}
export default AddProduct;