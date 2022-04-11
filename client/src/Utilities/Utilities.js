import _ from "lodash";

const computeQuantity = (arr, value) => {
  const q = arr.reduce((a, b) => (_.isEqual(b, value) ? a + 1 : a), 0);
  return q;
};

const totalAmount = (uniqueProducts, activeCurrency) =>
  uniqueProducts
    .map((product) => {
      const price = product.prices.filter(
        (price) => price.currency.label === activeCurrency
      );
      return price[0].amount;
    })
    .reduce((a, b) => a + b, 0)
    .toFixed(2);

export { computeQuantity, totalAmount };
