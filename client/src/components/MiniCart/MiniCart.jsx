import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Query } from "@apollo/client/react/components";
import _ from "lodash";

import { totalAmount } from "../../Utilities/Utilities";
import { GET_PRODUCT } from "../../Queries/queries";
import * as sc from "./MiniCart.styles";
import { MiniCartItem } from "../../components";
import images from "../../Assets/images";
import allActions from "../../State/Actions";

export class MiniCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  checkOutHandler = () => {
    this.props.checkOut();
    window.alert("Woohoo! Order Successfully Placed!!");
  };

  render() {
    const { miniCartClose, activeCurrency, cartProducts } = this.props;

    const uniqueProducts = _.uniqWith(cartProducts, _.isEqual);
    const uniqueIds = uniqueProducts.map((product) => product.id);
    const totalBill = totalAmount(cartProducts, activeCurrency);

    const symbol = cartProducts[0]?.prices.filter(
      (price) => price.currency.label === activeCurrency
    );

    return (
      <sc.MiniCartOuterContainer>
        <sc.Heading>
          <strong>My Bag</strong>, {uniqueProducts.length} items
        </sc.Heading>
        {cartProducts.length !== 0 ? (
          <sc.MiniCartInnerContainer>
            <sc.TopContainer>
              {uniqueIds.map((productId, index) => (
                <Query
                  key={index}
                  query={GET_PRODUCT}
                  variables={{ productId }}
                >
                  {({ data, loading, error }) => {
                    if (loading) return <span>Loading...</span>;
                    if (error) return console.error(error);

                    return (
                      <MiniCartItem
                        key={index}
                        product={data.product}
                        uniqueCartProducts={uniqueProducts}
                        productIndex={index}
                      />
                    );
                  }}
                </Query>
              ))}
            </sc.TopContainer>
          </sc.MiniCartInnerContainer>
        ) : (
          <sc.EmptyCartContainer>
            <sc.EmptyCart src={images.EmptyCart} alt="Empty Cart" />
          </sc.EmptyCartContainer>
        )}
        <sc.BottomContainer>
          <sc.TotalContainer>
            <sc.Total>Total</sc.Total>
            <sc.TotalPrice>
              {cartProducts.length > 0
                ? `${symbol[0].currency.symbol} ${totalBill}`
                : 0}
            </sc.TotalPrice>
          </sc.TotalContainer>
          <sc.MiniCartButtonContainer>
            <Link
              to={"/cart"}
              style={{
                textDecoration: "none",
                color: "var(--black-color)",
              }}
            >
              <sc.MiniCartButton onClick={() => miniCartClose()} type="view">
                VIEW BAG
              </sc.MiniCartButton>
            </Link>
            <sc.MiniCartButton
              onClick={() =>
                cartProducts.length > 0
                  ? this.checkOutHandler()
                  : window.alert("Oops! Your cart is empty!")
              }
              type="check"
            >
              CHECK OUT
            </sc.MiniCartButton>
          </sc.MiniCartButtonContainer>
        </sc.BottomContainer>
      </sc.MiniCartOuterContainer>
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
    checkOut: () => dispatch(allActions.productActions.checkOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);
