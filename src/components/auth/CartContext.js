// CartContext.js

import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  cart: [],
  totalAmount: 0,
};

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalAmount: state.totalAmount + action.payload.amount,
      };
    case 'SET_CART':
      return {
        ...state,
        cart: action.payload,
        totalAmount: action.payload.reduce((total, item) => total + item.amount, 0),
      };
      case 'REMOVE_FROM_CART':
        // Remove the product from the cart and update totalAmount
        const updatedCart = state.cart.filter(
          (item) => !(item.productId === action.payload.productId && item.storeId === action.payload.storeId)
        );
  
        return {
          ...state,
          cart: updatedCart,
          totalAmount: updatedCart.reduce((total, item) => total + item.amount, 0),
        };
    
    default:
      return state;
  };
  
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
