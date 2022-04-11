import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Navbar } from "../components";
import { AllProducts, SingleProduct, Cart } from "../containers";
import * as sc from "./App.styles";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <sc.Container>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate replace to="/all" />} />
            <Route path="/all" element={<AllProducts category="all" />} />
            <Route
              path="/clothes"
              element={<AllProducts category="clothes" />}
            />
            <Route path="/tech" element={<AllProducts category="tech" />} />
            <Route path="/product/:productId" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </sc.Container>
      </BrowserRouter>
    );
  }
}

export default App;
