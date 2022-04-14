import React, { Component } from "react";
import { connect } from "react-redux";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { GrAdd, GrSubtract } from "react-icons/gr";

import { computeQuantity } from "../../Utilities/Utilities";
import allActions from "../../State/Actions";
import { ProductAttributes } from "../../components";
import * as sc from "./CartItem.styles";

export class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currenctImage: 0,
    };
  }

  caroselClickHandler = (direction) => {
    if (direction === "right") {
      if (this.state.currenctImage === this.props.product.gallery.length - 1) {
        this.setState({ currenctImage: 0 });
      } else {
        this.setState({ currenctImage: this.state.currenctImage + 1 });
      }
    } else {
      if (this.state.currenctImage === 0) {
        this.setState({ currenctImage: this.props.product.gallery.length - 1 });
      } else {
        this.setState({ currenctImage: this.state.currenctImage - 1 });
      }
    }
  };

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
            {gallery.length > 1 && (
              <sc.Arrow
                direction="left"
                onClick={() => this.caroselClickHandler("left")}
              >
                <FaAngleLeft />
              </sc.Arrow>
            )}
            <sc.Image src={gallery[this.state.currenctImage]} alt={brand} />
            {gallery.length > 1 && (
              <sc.Arrow
                direction="right"
                onClick={() => this.caroselClickHandler("right")}
              >
                <FaAngleRight />
              </sc.Arrow>
            )}
          </sc.ImageContainer>
        </sc.RightContainer>
      </sc.CartContainer>
    );
  }
}

const mapStateToProps = (state) => {
  const { cartProducts, activeCurrency } = state.productReducer;
  return {
    cartProducts: cartProducts,
    activeCurrency: activeCurrency,
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

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
