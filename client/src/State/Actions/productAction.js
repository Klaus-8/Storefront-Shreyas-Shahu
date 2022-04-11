const AddToCart = (id, attributes, selectedAttributes, prices) => {
  const action = {
    type: "ADD_TO_CART",
    payload: {
      id: id,
      attributes: attributes,
      selectedAttributes: selectedAttributes,
      prices: prices,
    },
  };

  return action;
};

const RemoveFromCart = (id, attributes, selectedAttributes, prices) => {
  const action = {
    type: "REMOVE_FROM_CART",
    payload: {
      id: id,
      attributes: attributes,
      selectedAttributes: selectedAttributes,
      prices: prices,
    },
  };

  return action;
};

const MiniCartToggler = () => {
  const action = {
    type: "MINI_CART_TOGGLE",
  };

  return action;
};

const CurrencySwitcher = (currency) => {
  const action = {
    type: "CURRENCY_SWITCH",
    payload: currency,
  };

  return action;
};

const selectedAttributesHandler = (selectedAttributes) => {
  const action = {
    type: "SELECTED_ATTRIBUTES",
    payload: selectedAttributes,
  };

  return action;
};

const productActions = {
  AddToCart,
  RemoveFromCart,
  MiniCartToggler,
  CurrencySwitcher,
  selectedAttributesHandler,
};

export default productActions;
