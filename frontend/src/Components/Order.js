import React from 'react';


class Order extends React.Component{

  render(){
    return (
    <div className='order'>
      <h1>Order {this.props.order.id}</h1>
      <p>пользователь {this.props.order.userId} </p>
      <p>дата заказа {this.props.order.orderDate} </p>
      <p>статус заказа {this.props.order.status} </p>
      <p>адрес {this.props.order.addressId} </p>
      <p>комментарий {this.props.order.comments} </p>
      <p>сумма заказа {this.props.order.totalPrise} </p>
      <p>элементы заказа {this.props.order.orderItemId} </p>
    </div> 
    );
  }
}
 export default Order;