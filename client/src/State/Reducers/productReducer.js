import _ from "lodash";

const reducer = (
  state = {
    cartProducts: [],
    isMiniCartOpen: false,
    activeCurrency: "USD",
    selectedAttributes: null,
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
      };

    case "REMOVE_FROM_CART":
      state.cartProducts.reverse();

      const idx = _.findIndex(state.cartProducts, (element) =>
        _.isEqual(element, action.payload)
      );
      state.cartProducts.splice(idx, 1);

      return {
        ...state,
        cartProducts: [...state.cartProducts.reverse()],
      };

    case "MINI_CART_TOGGLE":
      return {
        ...state,
        isMiniCartOpen: !state.isMiniCartOpen,
      };

    case "CURRENCY_SWITCH":
      return {
        ...state,
        activeCurrency: action.payload,
      };

    case "SELECTED_ATTRIBUTES":
      return {
        ...state,
        selectedAttributes: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
