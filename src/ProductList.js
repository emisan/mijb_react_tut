import React, {Component} from 'react';
import {Table, Button} from 'reactstrap';

export default class ProductList extends Component {
    
    state = {
        products: []
    }

    getProductsByCategoryId = id => {
        if (id) {
            fetch(this.props.serverUrl + "/products?categoryId=" + id)
            .then(Response => Response.json())
            .then(data => this.setState({ products: data }));
        }
    }

    componentDidUpdate() {
        this.getProductsByCategoryId(this.props.categoryId);
    }

    render() {
       return(
        <div>
            <h3>{this.props.title}-{this.props.currentCategory}</h3>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Stock</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.products.map(product => (
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.productName}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.quantityPerUnit}</td>
                                <td>{product.unitsInStock}</td>
                                <td><Button color='info' onClick={()=>this.props.addToCart(product)}>+</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
       );
    }
}