import React from 'react';
import Order from './Order';
import AddOrder from './AddOrder';



class Orders extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      orders: [
          {
            id: 1,
            userId:2 ,
            orderDate: 2 ,
            orderItemId: 3,
            totalPrise:4 ,
            status:'SHIPPED' ,
            addressId: 3,
            comments:'kdg'
          }
      ]

    }

    this.addOrder = this.addOrder.bind(this);
  } 
  
  render(){
    return (
      <div> 
        <AddOrder onAddOrder={this.addOrder} />
        <div className='orders'>
        {
        this.state.orders.map((order) => {
          return <Order key={order.id} order={order} /> 
        }) 
        }
        </div>
      </div>
    )
  }
  addOrder(order){
    const id = this.state.orders.length + 1;
    this.setState({
      orders: [...this.state.orders, {id, order}]
    })
  }
}
export default Orders;