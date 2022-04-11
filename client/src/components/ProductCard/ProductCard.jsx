import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import images from "../../Assets/images";
import * as sc from "./ProductCard.styles";

export class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { id, name, gallery, prices, inStock } = this.props.product;
    const { activeCurrency } = this.props;
    const price = prices.filter(
      (price) => price.currency.label === activeCurrency
    );

    return (
      <sc.Container>
        <Link to={`/product/${id}`}>
          <sc.ImageContainer>
            <sc.Image src={gallery[0]} alt="Nike Moon Shoes" />
            {!inStock && (
              <sc.NoStockContainer>
                <sc.NoStock>OUT OF STOCK</sc.NoStock>
              </sc.NoStockContainer>
            )}
          </sc.ImageContainer>
          {inStock && (
            <sc.ButtonContainer>
              <sc.CartIcon src={images.WhiteCart} alt="Cart Icon" />
            </sc.ButtonContainer>
          )}
        </Link>
        <sc.InfoContainer>
          <sc.Title>{name}</sc.Title>
          <sc.Price>{`${price[0].currency.symbol} ${price[0].amount}`}</sc.Price>
        </sc.InfoContainer>
      </sc.Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { activeCurrency } = state.productReducer;

  return {
    activeCurrency: activeCurrency,
  };
};

export default connect(mapStateToProps)(ProductCard);
