import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Routes, Route } from 'react-router-dom';

import CatgeoryList from './CategoryList';
import CartList from './CartList';
import MainNavBar from './MainNavBar';
import NotFound from './NotFound';
import ProductList from './ProductList';
import FormDemo1 from './FormDemo1';

import alertify from 'alertifyjs';

import logo from './resource/logo.svg';
import './css/App.css';

export default class App extends Component {

  state = {
    currentCategory: "",
    jsonServerUrl: "http://localhost:3000",
    categories: [],
    categoryId: "",
    cart: []
  }

  addToCart = product => {
    let newCart = this.state.cart
    var foundProduct = newCart.find(c => c.product.id === product.id);
    if (foundProduct) {
      foundProduct.quantity += 1;
    }
    else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart!", 1);
  }

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
    this.setState({ categoryId: category.id });
  }

  removeFromCart = product => {
    this.setState({ cart: this.state.cart.filter(c => c.product.id !== product.id) })
    alertify.error(product.productName + " removed from cart", 1);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>MIJB React Kurs</h3>
        </div>
        <Container>
          <div className="Main-Nav-Bar">
            <MainNavBar cart={this.state.cart} removeFromCart={this.removeFromCart} />
          </div>
          <Row>
            <Col xs="3">
              <CatgeoryList title="Categories"
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                serverUrl={this.state.jsonServerUrl}
                categories={this.state.categories} />
            </Col>
            <Col xs="9">
              <Routes>
                <Route path="/" 
                      element={
                          <ProductList title="Products"
                            currentCategory={this.state.currentCategory}
                            serverUrl={this.state.jsonServerUrl}
                            categoryId={this.state.categoryId}
                            addToCart={this.addToCart} />
                      }
                />
                <Route path="/cart" element={
                          <CartList title="Products"
                            cart={this.state.cart}
                            removeFromCart={this.removeFromCart} />
                      }
                />
                <Route path="/form1" element={<FormDemo1 />}/>
                <Route path="*" element={<NotFound />}/>
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}