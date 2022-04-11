import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import _ from "lodash";

import { GET_PRODUCT } from "../../Queries/queries";
import { CartItem, Loading } from "../../components";
import * as sc from "./Cart.styles";
import images from "../../Assets/images";

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { cartProducts, isMiniCartOpen } = this.props;

    const uniqueProducts = _.uniqWith(cartProducts, _.isEqual);
    const uniqueIds = uniqueProducts.map((product) => product.id);

    return (
      <sc.OuterContainer
        emptyCart={cartProducts.length === 0 ? true : false}
        miniCart={isMiniCartOpen}
      >
        <sc.Heading>CART</sc.Heading>
        {cartProducts.length !== 0 ? (
          <sc.Container>
            {uniqueIds.map((productId, index) => (
              <Query key={index} query={GET_PRODUCT} variables={{ productId }}>
                {({ data, loading, error }) => {
                  if (loading) return <Loading />;
                  if (error) console.error(error);

                  return (
                    <sc.CartItemContainer key={data.product.id}>
                      <sc.Hr />
                      <CartItem
                        product={data.product}
                        uniqueCartProducts={uniqueProducts}
                        productIndex={index}
                      />
                    </sc.CartItemContainer>
                  );
                }}
              </Query>
            ))}
          </sc.Container>
        ) : (
          <sc.EmptyCartContainer miniCart={isMiniCartOpen}>
            <sc.EmptyCart src={images.EmptyCart} alt="Empty Cart" />
          </sc.EmptyCartContainer>
        )}
      </sc.OuterContainer>
    );
  }
}

const mapStateToProps = (state) => {
  const { cartProducts, isMiniCartOpen } = state.productReducer;
  return {
    cartProducts: cartProducts,
    isMiniCartOpen: isMiniCartOpen,
  };
};

export default connect(mapStateToProps)(Cart);
