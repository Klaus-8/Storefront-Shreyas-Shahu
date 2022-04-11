import React, { Component } from "react";
import { connect } from "react-redux";
import { GrAdd, GrSubtract } from "react-icons/gr";

import { ProductAttributes } from "../../components";
import * as sc from "./MiniCartItem.styles";
import allActions from "../../State/Actions";
import { computeQuantity } from "../../Utilities/Utilities";

export class MiniCartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, gallery, prices, brand } = this.props.product;
    const { activeCurrency, uniqueCartProducts, productIndex, cartProducts } =
      this.props;
    const { id, attributes, selectedAttributes } =
      uniqueCartProducts[productIndex];

    const price = prices.filter(
      (price) => price.currency.label === activeCurrency
    );

    return (
      <sc.CartContainer>
        <sc.LeftContainer>
          <sc.Title>{brand}</sc.Title>
          <sc.SubTitle>{name}</sc.SubTitle>
          <sc.PriceValue>{`${price[0].currency.symbol} ${price[0].amount}`}</sc.PriceValue>
          <ProductAttributes
            type="miniCart"
            attributes={uniqueCartProducts[productIndex].attributes}
            selectedAttributes={
              uniqueCartProducts[productIndex].selectedAttributes
            }
          />
        </sc.LeftContainer>
        <sc.RightContainer>
          <sc.QuantityContainer>
            <sc.Plus
              onClick={() =>
                this.props.increaseQuantity(
                  id,
                  attributes,
                  selectedAttributes,
                  prices
                )
              }
            >
              <GrAdd />
            </sc.Plus>
            <sc.Quantity>
              {computeQuantity(cartProducts, uniqueCartProducts[productIndex])}
            </sc.Quantity>
            <sc.Minus
              onClick={() =>
                this.props.decreaseQuantity(
                  id,
                  attributes,
                  selectedAttributes,
                  prices
                )
              }
            >
              <GrSubtract />
            </sc.Minus>
          </sc.QuantityContainer>
          <sc.ImageContainer>
            <sc.Image src={gallery[0]} alt={brand} />
          </sc.ImageContainer>
        </sc.RightContainer>
      </sc.CartContainer>
    );
  }
}

const mapStateToProps = (state) => {
  const { activeCurrency, cartProducts } = state.productReducer;

  return {
    activeCurrency: activeCurrency,
    cartProducts: cartProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseQuantity: (id, attributes, selectedAttributes, prices) =>
      dispatch(
        allActions.productActions.AddToCart(
          id,
          attributes,
          selectedAttributes,
          prices
        )
      ),
    decreaseQuantity: (id, attributes, selectedAttributes, prices) =>
      dispatch(
        allActions.productActions.RemoveFromCart(
          id,
          attributes,
          selectedAttributes,
          prices
        )
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniCartItem);
