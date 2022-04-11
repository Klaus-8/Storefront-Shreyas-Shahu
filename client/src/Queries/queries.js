import { gql } from "@apollo/client";

const GET_PRODUCT = gql`
  query ($productId: String!) {
    product(id: $productId) {
      id
      name
      gallery
      description
      attributes {
        name
        type
        items {
          displayValue
          value
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
      inStock
    }
  }
`;

const GET_PRODUCTS = gql`
  query ($category: String!) {
    category(input: { title: $category }) {
      name
      products {
        id
        name
        gallery
        inStock
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

const GET_CURRENCIES = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;

export { GET_PRODUCT, GET_PRODUCTS, GET_CATEGORIES, GET_CURRENCIES };
