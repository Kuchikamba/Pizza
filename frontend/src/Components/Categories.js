import React from 'react';
import Category from './Category';
import AddCategory from './AddCategory';

class Categories extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      category: [
        {
          id: 1,
          name: 'Pizza',
        }
      ]
    }
  }
  render(){
    return(
      <div>
        <h1>Category</h1>
        <AddCategory onAddCategory={this.addCategory} />
        <div className='category'>
          {
            this.state.category.map((category) => {
              return <Category key={category.id} category={category} />
            })
          }
        </div>
      </div>
    )
  }
  addCategory(category){
    const id = this.state.category.length + 1;
    this.setState({
      category: [...this.state.category, {id, category}]
    })
  }
}
export default Categories;