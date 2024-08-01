import React from 'react';

class AddCategory extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      category: [
        {
          id: 0,
          name: ''
        }
      ]
    }
  }
  render(){
    return(
      <div>
        <h1>AddCategory</h1>
        <form>
          <label>
            <input placeholder='id категории' type="text" name="id" onChange={(e) => this.setState({id: e.target.value})}/>
          </label>
          <label>
            <input placeholder = 'название' type="text" name="name" onChange={(e) => this.setState({name: e.target.value})}/>
          </label>
          <button  type="submit" onClick = {() => this.props.onAddCategory({
            id: this.state.id,
            name: this.state.name,
          })}>
          добавить
          </button>
        </form>
      </div>
    )
  }
}
export default AddCategory;