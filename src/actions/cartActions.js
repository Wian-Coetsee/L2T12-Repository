// Action creator function to add a product to the cart
export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product
});
