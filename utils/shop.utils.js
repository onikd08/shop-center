export function getDiscountedPrice(price, discountPercentage) {
  return (price - (discountPercentage / 100) * 100).toFixed(2);
}
