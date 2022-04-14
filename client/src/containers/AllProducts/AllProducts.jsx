import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";

import { GET_PRODUCTS } from "../../Queries/queries";
import { ProductCard, Loading } from "../../components";
import * as sc from "./AllProducts.styles";
import { useParams } from "react-router-dom";

export class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { category } = this.props.params;

    return (
      <sc.OuterContainer>
        <sc.Container>
          <sc.Heading>{`Category - ${
            category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
          }`}</sc.Heading>
          <sc.ProductContainer>
            <Query query={GET_PRODUCTS} variables={{ category }}>
              {({ data, loading, error }) => {
                if (loading) return <Loading />;
                if (error) console.error(error);

                return data.category.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ));
              }}
            </Query>
          </sc.ProductContainer>
        </sc.Container>
      </sc.OuterContainer>
    );
  }
}

const mapStateToProps = (state) => {
  const { isMiniCartOpen } = state.productReducer;

  return {
    isMiniCartOpen: isMiniCartOpen,
  };
};

export default connect(mapStateToProps)((props) => (
  <AllProducts {...props} params={useParams()} />
));
