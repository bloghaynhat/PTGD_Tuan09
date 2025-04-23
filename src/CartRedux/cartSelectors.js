export const selectCartItems = (state) => state.cart.cartItems;

export const selectTotalQuantity = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);

export const selectTotalPrice = (state) =>
  state.cart.cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
