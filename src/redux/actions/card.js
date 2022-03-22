export const setPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_TO_CARD',
    payload: pizzaObj,
  });

export const clearCart = () => ({
    type: 'CLEAR_CART',
});

export const removeCartItems = (id) => ({
    type: 'REMOVE_CART',
    payload:id,
});

export const plusCartItem = (id) => ({
    type: 'PLUS_CART_ITEM',
    payload:id,
});

export const minusCartItem = (id) => ({
    type: 'MINUS_CART_ITEM',
    payload:id,
});