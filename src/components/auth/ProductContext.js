import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Define your initial state
const initialState = {
    topDealsOneWay: [], // Add default value
    products: [],
    flashSales: [], // Add default value
    random: [], // Add default value
    regular: [], // Add default value
    spartAppBestPrices: [], // Add default value
  };

// Create the ProductContext
const ProductContext = createContext();

// Define the reducer function to handle state changes
const productReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        topDealsOneWay: action.payload.topDealsOneWay || [],
        products: action.payload.products || [],
        flashSales: action.payload.flashSales || [],
        random: action.payload.random || [],
        regular: action.payload.regular || [],
        spartAppBestPrices: action.payload.spartAppBestPrices || [],
      };
    // Other cases...
    default:
      return state;
  }
};

// Create a ProductProvider component that will wrap your entire application
export const ProductProvider = ({ children }) => {
  // Use the useReducer hook to manage state
  const [state, dispatch] = useReducer(productReducer, initialState);

  // Load the state from localStorage on component mount
  useEffect(() => {
    const savedState = localStorage.getItem('productState');
    if (savedState) {
      dispatch({ type: 'SET_PRODUCTS', payload: JSON.parse(savedState) });
    }
  }, []);

  // Save the state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('productState', JSON.stringify(state));
  }, [state]);

  // Create a value object with state and dispatch to provide to the components
  const value = { state, dispatch };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

// Create a custom hook for using the ProductContext
export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};
