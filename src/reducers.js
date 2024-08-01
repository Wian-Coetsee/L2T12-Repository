import { combineReducers } from 'redux'; 

// Initial states for cart and user
const initialCartState = {
  items: [], 
  totalPrice: 0, 
};

const initialUserState = {
  user: null, 
};

// Cart reducer handles actions related to cart management
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newItem = action.payload; 
      return {
        ...state,
        items: [...state.items, newItem], 
        totalPrice: state.totalPrice + newItem.price, 
      };
    case 'REMOVE_FROM_CART':
      const itemId = action.payload; 
      const updatedItems = state.items.filter(item => item.id !== itemId); 
      const removedItem = state.items.find(item => item.id === itemId); 
      return {
        ...state,
        items: updatedItems,
        totalPrice: state.totalPrice - (removedItem ? removedItem.price : 0), 
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: [], 
        totalPrice: 0, 
      };
    default:
      return state;
  }
};

// User reducer handles actions related to user authentication and management
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        user: action.payload, 
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null, 
      };
    default:
      return state; 
  }
};

// Combining cart and user reducers into a root reducer
const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,

});

export default rootReducer;
