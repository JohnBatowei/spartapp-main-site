import { useParams,Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import Nav from "./Nav";
import Footer from "./Footer";
import "./styles/details.scss";
import vid from "../assets/SpartApp.mp4";
import { useProduct } from '../components/auth/ProductContext';
import { useCart } from '../components/auth/CartContext';
import Product from './Product'
import SpartAppPrice from './SpartAppPrice'
import OfficialStores from './OfficialStores'

const DetailsProducts = () => {
  const { s:storeName,st, pd } = useParams();
  const { state } = useProduct(); // Access the context state
  // const history = useHistory();
  const { state:cartState, dispatch:cartDispatch } = useCart();
  let filteredProducts = [];

  if (storeName && state[storeName]) {
    // Filter products based on storeID and productID
    filteredProducts = state[storeName].filter(product => (
      product.storeId === st && product.productId === pd
    ));
  }
// console.log(filteredProducts)

const handleBack = async ()=>{
 window.history.back();
}


const handleAddToCart = () => {
  // Assuming filteredProducts[0] contains the product details
  const productToAdd = filteredProducts[0];

  // Check if the product is already in the cart
  const existingCartItemIndex = cartState.cart.findIndex(
    (cartItem) =>
      cartItem.productId === productToAdd.productId && cartItem.storeId === productToAdd.storeId
  );

  const amountToAdd = productToAdd.discounted
  ? productToAdd.discountedAmount
  : productToAdd.amount;

  if (existingCartItemIndex !== -1) {
    // Product already exists in the cart, update quantity and total amount
    const updatedCart = [...cartState.cart];
    updatedCart[existingCartItemIndex] = {
      ...updatedCart[existingCartItemIndex],
      quantity: updatedCart[existingCartItemIndex].quantity + 1,
      amount: updatedCart[existingCartItemIndex].amount + amountToAdd,
    };

    cartDispatch({
      type: 'SET_CART',
      payload: updatedCart,
    });
  } else {
    // Product doesn't exist in the cart, add a new item
    cartDispatch({
      type: 'ADD_TO_CART',
      payload: {
        productId: productToAdd.productId,
        productName: productToAdd.productName,
        amount: amountToAdd,
        quantity: 1, // Set initial quantity to 1
        storeId: productToAdd.storeId, // Include storeId
        image: productToAdd.image, 
        // Add other necessary product details
      },
    });
  }
};


const handleRemoveFromCart = (productId, storeId) => {
  // Dispatch an action to remove the product from the cart
  cartDispatch({
    type: 'REMOVE_FROM_CART',
    payload: { productId, storeId },
  });
};
// ...

<div className="addtocart" onClick={handleAddToCart}>
  Add to cart
</div>

  return <div className="details">
      <div className="landing-page">
        <div className="banner">
          <div className="video">
            <video src={vid} muted autoPlay loop />
            <div className="call">
              <span>call to order</span>
              <span>08079436049</span>
            </div>
          </div>
        </div>
      </div>
      <Nav />

      <main>
        <div className="filed-and-cart">
          <div className="field">
            {/* Display matching product at the top */}
            {filteredProducts.length > 0 && <div className="item-to-cart">
                <div className="img">
                  <div className="p-img">
                    <img src={filteredProducts[0].image} alt={filteredProducts[0].productName} />
                  </div>
                  <hr/>
                  <div className="remaining-p">
                    {state[storeName].map(product =>
                      <div key={product.productId}>
                        {/* Skip the matching product, as it's already displayed at the top */}
                        {product.storeId === st && product.productId === pd
                          ? null
                          : <Link
                              to={`/product-Sale-Page/${storeName}/${product.storeId}/${product.productId}`}
                            >
                              <img
                                src={product.image}
                                alt={product.productName}
                              />
                            </Link>}
                      </div>
                    )}
                  </div>
                </div>

                <div className="right">
                  <div className="det-name">
                    <span style={{ color: "grey", fontWeight: "510" }}>
                      {filteredProducts[0].productName}
                    </span>
                    <span style={{ fontSize: "1.2rem" }}>
                      {filteredProducts[0].details}
                    </span>

                    <span style={{ fontSize: "1rem", fontWeight: "510", color: "grey" }}>
                      Brand : {filteredProducts[0].productType}
                    </span>
                  </div>
                  
                  <div className="amount">
                    {filteredProducts[0].discounted === true ? <div className="disc">
                          <span className="_price" style={{ textDecoration: "line-through", fontSize: "1rem" }}>
                            {" "}&#x20A6; {filteredProducts[0].amount.toLocaleString()}
                          </span>
                          <span className="_price a">
                            {" "}<span className="main-price">
                              &#x20A6;
                            </span> {filteredProducts[0].discountedAmount.toLocaleString()}
                          </span>
                        </div> : <div className="disc">
                          <span className="_price">
                            {" "}<span className="main-price">
                              {" "}&#x20A6;{" "}
                            </span> {filteredProducts[0].amount.toLocaleString()}
                          </span>
                        </div>}
                  </div>

                  <div className="back" onClick={handleBack}>
                    <button>Back</button>
                  </div>

                  <div className="addtocart"  onClick={handleAddToCart}>Add to cart</div>
                </div>
              </div>}
          </div>

     
<div className="cart">
  <h3>Your Cart</h3>
  <div className="cart-items">
    {cartState.cart.map((cartItem) => (
      <div key={cartItem.productId} className="cart-item">
        <div className="item-details">
          <img src={cartItem.image} alt={cartItem.productName} className="item-image" />
          <div className="item-info">
            <p className="item-name">{cartItem.productName}</p>
            <p className="item-price">&#x20A6; {cartItem.amount.toLocaleString()}</p>
            <p className="item-quantity">Quantity: {cartItem.quantity}</p>
            <button
              className="remove-from-cart"
              onClick={() => handleRemoveFromCart(cartItem.productId, cartItem.storeId)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
  <div className="cart-summary">
    <div className="total-amount">
      <p>Total:</p>
      <p className="amount">&#x20A6; {cartState.totalAmount.toLocaleString()}</p>
    </div>
    <Link to="/payment-page" className="proceed-to-checkout">
      <button className="make-payment">Proceed to Checkout</button>
    </Link>
  </div>
</div>

        </div>

    
        {/* <div className="other-product">
         
        </div> */}

      </main>
        <Product />
        <SpartAppPrice />
        <OfficialStores />
          <br />  <br />  <br /><br />  <br />
        
      <Footer />
    </div>;
};

export default DetailsProducts;
