import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Markup } from "interweave";

import { GET_PRODUCT } from "../../Queries/queries";
import allActions from "../../State/Actions";
import { ProductAttributes, Loading } from "../../components";
import * as sc from "./SingleProduct.styles";

export class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      primaryImage: 0,
    };
  }

  imageChangeHandler = (idx) => {
    this.setState({ primaryImage: idx });
  };

  render() {
    const { productId } = this.props.params;
    const { activeCurrency, selectedAttributes } = this.props;

    return (
      <sc.OuterContainer>
        <Query query={GET_PRODUCT} variables={{ productId }}>
          {({ data, loading, error }) => {
            if (loading) return <Loading />;
            if (error) console.error(error);

            const {
              id,
              name,
              brand,
              description,
              inStock,
              attributes,
              gallery,
              prices,
            } = data.product;

            let initialAttributes = {};
            attributes.forEach((attribute) => {
              const { name, items } = attribute;
              initialAttributes = {
                ...initialAttributes,
                [name]: items[0].value,
              };
            });

            const price = prices.filter(
              (price) => price.currency.label === activeCurrency
            );

            return (
              <sc.Container>
                <sc.ImageContainer>
                  <sc.SecondaryImageOuterContainer>
                    <sc.SecondaryImageInnerContainer>
                      {gallery.map((pic, index) => (
                        <sc.SecondaryImage
                          key={index}
                          src={pic}
                          onClick={() => this.imageChangeHandler(index)}
                        />
                      ))}
                    </sc.SecondaryImageInnerContainer>
                  </sc.SecondaryImageOuterContainer>
                  <sc.PrimaryImageContainer>
                    <sc.PrimaryImage src={gallery[this.state.primaryImage]} />
                  </sc.PrimaryImageContainer>
                </sc.ImageContainer>
                <sc.InfoContainer>
                  <sc.Title>{brand}</sc.Title>
                  <sc.SubTitle>{name}</sc.SubTitle>
                  <ProductAttributes
                    type="singleProduct"
                    attributes={attributes}
                    initialAttributes={initialAttributes}
                  />
                  <sc.Price>Price:</sc.Price>
                  <sc.PriceValue>{`${price[0].currency.symbol} ${price[0].amount}`}</sc.PriceValue>
                  {inStock ? (
                    <sc.AddCartContainer
                      onClick={() =>
                        this.props.addToCart(
                          id,
                          attributes,
                          selectedAttributes,
                          prices
                        )
                      }
                    >
                      <sc.AddCart>Add to Cart</sc.AddCart>
                    </sc.AddCartContainer>
                  ) : (
                    <sc.OutOfStockContainer>
                      <sc.OutOfStock>Out of Stock</sc.OutOfStock>
                    </sc.OutOfStockContainer>
                  )}
                  <sc.Desc>
                    <sc.FullDesc>
                      <Markup content={description} />
                    </sc.FullDesc>
                  </sc.Desc>
                </sc.InfoContainer>
              </sc.Container>
            );
          }}
        </Query>
      </sc.OuterContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productId, attributes, selectedAttributes, prices) =>
      dispatch(
        allActions.productActions.AddToCart(
          productId,
          attributes,
          selectedAttributes,
          prices
        )
      ),
  };
};

const mapStateToProps = (state) => {
  const { isMiniCartOpen, activeCurrency, selectedAttributes } =
    state.productReducer;

  return {
    isMiniCartOpen: isMiniCartOpen,
    activeCurrency: activeCurrency,
    selectedAttributes: selectedAttributes,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => <SingleProduct {...props} params={useParams()} />);
