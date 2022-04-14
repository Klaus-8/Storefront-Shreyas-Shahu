import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { GET_CATEGORIES } from "../../Queries/queries";
import { MiniCart, CurrencyMenu, OutsideClick } from "../../components";
import images from "../../Assets/images";
import * as sc from "./Navbar.styles";
import allActions from "../../State/Actions";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategory: "all",
      currencyMenu: false,
      currentCurrency: "$",
      isMiniCartOpen: false,
    };
  }

  currencyClickHandler = () => {
    this.setState({
      currencyMenu: !this.state.currencyMenu,
    });
  };

  currencyChangeHandler = (currency) => {
    this.setState({
      currentCurrency: currency,
      currencyMenu: !this.state.currencyMenu,
    });
    this.props.CurrencySwitcher(currency);
  };

  miniCartClickHandler = () => {
    this.setState({
      isMiniCartOpen: !this.state.isMiniCartOpen,
    });
    this.props.MiniCartToggler();
  };

  render() {
    const { cartProducts } = this.props;

    return (
      <sc.Container>
        <sc.Left>
          <Query query={GET_CATEGORIES}>
            {({ data, loading, error }) => {
              if (loading) return <span>Loading...</span>;
              if (error) console.error(error);

              return data.categories.map((category, index) => (
                <Link
                  key={index}
                  to={`/${category.name}`}
                  style={{
                    textDecoration: "none",
                    color: "var(--black-color)",
                  }}
                  onClick={() =>
                    this.setState({ currentCategory: category.name })
                  }
                >
                  <sc.Button
                    active={category.name}
                    currentCategory={this.state.currentCategory}
                  >
                    {category.name.toUpperCase()}
                  </sc.Button>
                </Link>
              ));
            }}
          </Query>
        </sc.Left>
        <sc.Center>
          <Link
            to="/"
            onClick={() => this.setState({ currentCategory: "all" })}
          >
            <sc.BrandLogo src={images.BrandIcon} alt="Brand Logo" />
          </Link>
        </sc.Center>
        <sc.Right>
          <sc.CurrencyButton onClick={this.currencyClickHandler}>
            <sc.Currency>{this.state.currentCurrency}</sc.Currency>
            <sc.CurrencyArrow
              src={this.state.currencyMenu ? images.ArrowUp : images.ArrowDown}
              alt="Arrows"
            />
          </sc.CurrencyButton>
          <OutsideClick
            isOpen={this.state.currencyMenu}
            closeHandler={this.currencyClickHandler}
          >
            {this.state.currencyMenu && (
              <CurrencyMenu
                currencyChangeHandler={this.currencyChangeHandler}
              />
            )}
          </OutsideClick>
          <sc.CartButtonContainer>
            <sc.CartButton
              src={images.Cart}
              alt="Cart Icon"
              onClick={this.miniCartClickHandler}
            />
            {cartProducts?.length > 0 && (
              <sc.CartButtonBadgeContainer onClick={this.miniCartClickHandler}>
                <sc.CartButtonBadge>{cartProducts.length}</sc.CartButtonBadge>
              </sc.CartButtonBadgeContainer>
            )}
          </sc.CartButtonContainer>
          <OutsideClick
            isOpen={this.state.isMiniCartOpen}
            closeHandler={this.miniCartClickHandler}
          >
            {this.state.isMiniCartOpen && (
              <MiniCart miniCartClose={this.miniCartClickHandler} />
            )}
          </OutsideClick>
        </sc.Right>
      </sc.Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { cartProducts } = state.productReducer;

  return {
    cartProducts: cartProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    MiniCartToggler: () =>
      dispatch(allActions.productActions.MiniCartToggler()),
    CurrencySwitcher: (currency) =>
      dispatch(allActions.productActions.CurrencySwitcher(currency)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
