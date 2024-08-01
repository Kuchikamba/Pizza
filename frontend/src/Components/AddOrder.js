import React from 'react';

class AddOrder extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      order: [
          {
            id: 0,
            userId: 0,
            orderDate: 0,
            orderItemId: 0,
            totalPrise: 0,
            status: 'SHIPPED',
            addressId: 0,
            comments:''
          }
      ]
      
     }
     
  }
  render(){
    return(
      <div>
        <h1>AddOrder</h1>
        
        <form>
          <label>
            <input placeholder='id пользователя' type="text" name="userId" onChange={(e) => this.setState({userId: e.target.value})}/>
          </label>
          <label>
            <input placeholder = 'дата заказа' type="date" name="orderDate" onChange={(e) => this.setState({orderDate: e.target.value})}/>
          </label>
          <label>
            <input placeholder = 'элементы заказа' type="text" name="orderItemId" onChange={(e) => this.setState({orderitemId: e.target.value})}/>
          </label>
          <label>
            <input placeholder='конечная цена' type='text' name="totalPrise" onChange={(e) => this.setState({totalPrise: e.target.value})}/>
          </label>
          <label>
            <select placeholder='статус' type="text" name="status" onChange={(e) => this.setState({status: e.target.value})}>
            <option>PENDING</option>
            <option>SHIPPED</option>
            <option>DELIVERED</option>
            <option>CANCELED</option>
            </select>
          </label>
          <label>
            <input placeholder='адресс' type="text" name="addressId" onChange={(e) => this.setState({addressId: e.target.value})}/>
          </label>
          <label>
            <input placeholder='комментарий' type="text" name="comments" onChange={(e) => this.setState({comments: e.target.value})}/>
          </label>
          <button  type="submit" onClick = {() => this.props.onAddOrder({ 
        userId: this.state.userId,
        orderDate: this.state.orderDate,
        orderItemId: this.state.orderItemId,
        totalPrise: this.state.totalPrise,
        status: this.state.status,
        addressId: this.state.addressId,
        comments: this.state.comments,
      })}>
          добавить
          </button>
        </form>
      </div>
    )
  }
}
export default AddOrder;