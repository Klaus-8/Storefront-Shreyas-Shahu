import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import { Navbar } from "../components";
import { AllProducts, SingleProduct, Cart } from "../containers";
import * as sc from "./App.styles";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isMiniCartOpen } = this.props;

    return (
      <BrowserRouter>
        <sc.AppContainer>
          <Navbar />
          {isMiniCartOpen && <sc.DarkBackground />}
          <Routes>
            <Route path="/" element={<Navigate replace to="/all" />} />
            <Route path="/:category" element={<AllProducts />} />
            <Route path="/product/:productId" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </sc.AppContainer>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  const { isMiniCartOpen } = state.productReducer;

  return {
    isMiniCartOpen: isMiniCartOpen,
  };
};

export default connect(mapStateToProps)(App);
