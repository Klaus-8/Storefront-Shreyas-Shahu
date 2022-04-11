import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { GET_CURRENCIES } from "../../Queries/queries";
import * as sc from "./CurrencyMenu.styles";

export class CurrencyMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { currencyChangeHandler } = this.props;

    return (
      <Query query={GET_CURRENCIES}>
        {({ data, loading, error }) => {
          if (loading) return <span>Loading...</span>;
          if (error) console.error(error);

          const { currencies } = data;
          return (
            <sc.CurrencyMenu>
              {currencies.map((currency, index) => (
                <sc.CurrencyContainer
                  key={index}
                  onClick={() => currencyChangeHandler(currency.label)}
                >
                  <sc.CurrencyItem>{`${currency.symbol} ${currency.label}`}</sc.CurrencyItem>
                </sc.CurrencyContainer>
              ))}
            </sc.CurrencyMenu>
          );
        }}
      </Query>
    );
  }
}

export default CurrencyMenu;
