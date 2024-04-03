export const roundPrice = (price: number): number => Math.floor(price);
export const calculateDiscount = (
  price: number,
  discountedPrice: number
): number => {
  return price !== discountedPrice
    ? Math.floor(((price - discountedPrice) / price) * 100)
    : 0;
};
