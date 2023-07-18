import React, { Component } from 'react';
import {Table, Button} from 'reactstrap';

export default class CartList extends Component {
    renderCart() {
      let sum = 0;
      return (
        <div>
          <Table>
              <thead>
                  <tr>
                      <th>#</th>
                      <th>Category Id</th>
                      <th>Product Name</th>
                      <th>Unit Price</th>
                      <th>Quantity</th>
                      <th>Sum</th>
                      <th></th>
                      <th hidden></th>
                  </tr>
              </thead>
              <tbody>
                  {
                      this.props.cart.map(cartItem => (
                          <tr key={cartItem.product.id}>
                              <td>{cartItem.product.id}</td>
                              <td>{cartItem.product.categoryId}</td>
                              <td>{cartItem.product.productName}</td>
                              <td>{cartItem.product.unitPrice}</td>
                              <td>{cartItem.quantity}</td>
                              <td>{cartItem.product.unitPrice*cartItem.quantity}</td>
                              <td><Button color='danger' onClick={()=>this.props.removeFromCart(cartItem.product)}>Remove</Button></td>
                              <td hidden>{sum += cartItem.product.unitPrice*cartItem.quantity}</td>
                          </tr>
                      ))
                  }
              </tbody>
          </Table>
          <div>
            {sum > 0 ? "Overall order price = " + sum : ""}
          </div>
        </div>
      )
    }
    render() {
        return (
            this.renderCart()
        )
    }
}