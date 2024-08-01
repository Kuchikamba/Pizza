import React from 'react';

class Category extends React.Component{
  render(){
    return (
      <div className='category'>
        <h1>Category {this.props.category.id}</h1>
        <p>Название {this.props.category.name} </p>
      </div>
    )
  }
}
export default Category;