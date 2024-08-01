// Initial state definition
const initialState = {
    items: [],
    totalPrice: 0
};

// Reducer function definition
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        // Case for adding an item to the cart
        case 'ADD_TO_CART':
            const addedItem = action.payload;
            const updatedItems = [...state.items, addedItem];
            const updatedPrice = state.totalPrice + addedItem.price;
            return {
                ...state,
                items: updatedItems,
                totalPrice: updatedPrice
            };
        
        // Default case
        default:
            return state;
    }
};

// Export the reducer
export default cartReducer;
