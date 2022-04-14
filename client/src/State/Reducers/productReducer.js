import _ from "lodash";

const reducer = (
  state = {
    cartProducts: JSON.parse(localStorage.getItem("cartProducts")) || [],
    isMiniCartOpen: false,
    activeCurrency: "USD",
    selectedAttributes: null,
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const addProduct = {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
      };

      localStorage.setItem(
        "cartProducts",
        JSON.stringify(addProduct.cartProducts)
      );

      return addProduct;

    case "REMOVE_FROM_CART":
      state.cartProducts.reverse();

      const idx = _.findIndex(state.cartProducts, (element) =>
        _.isEqual(element, action.payload)
      );
      state.cartProducts.splice(idx, 1);

      const removeProduct = {
        ...state,
        cartProducts: [...state.cartProducts.reverse()],
      };

      localStorage.setItem(
        "cartProducts",
        JSON.stringify(removeProduct.cartProducts)
      );

      return removeProduct;

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

    case "CHECK_OUT":
      return {
        ...state,
        cartProducts: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
