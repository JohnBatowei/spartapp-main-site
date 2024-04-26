import { useCart } from "../components/auth/CartContext";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PaystackPop from "@paystack/inline-js";
import Nav from "./Nav";
import Footer from "./Footer";
import "./styles/paymentPage.scss";
import { useAuthContext } from "../components/hooks/useAuthContext";

const PaymentPage = () => {
  const history = useHistory();
  const { state: cartState, dispatch: cartDispatch } = useCart();
  const { user } = useAuthContext();
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [addressType, setAddressType] = useState("pickup"); // Default to pickup
  const [additionalCharge, setAdditionalCharge] = useState(0);
  // const [transactionReferenceNum,setTransactionReferenceNum ] = useState(0)
  const paystack = new PaystackPop();

  // console.log(user)
  const handleMakePayment = async () => {
    try {
      const totalAmountWithAdditionalCharge =
        parseInt(cartState.totalAmount) + additionalCharge;
        const E = user.email || email
      if ( !E || !name || !city || !addressType) {
        return alert("All fields are required");
      }

      paystack.newTransaction({
        key: "pk_test_be07f7e6ad0fca2928ee968cc155eaaf8a30b0ed",
        amount: totalAmountWithAdditionalCharge * 100,
        email: E,
        name,
        onSuccess(transaction) {
          let message = `Payment Successful!!! Reference Number : ${transaction.reference}`;
          // setTransactionReferenceNum(transaction.reference)

          fetch("http://localhost:3800/paystack/api/payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name,
              email,
              transactionReferenceNum: transaction.reference,
              address: {
                state,
                city,
                addressType
              },
              cart: cartState.cart,
              totalAmount: totalAmountWithAdditionalCharge
            })
          })
            .then((res) => {
              if (!res.ok) {
                return alert("Cant reach the server");
              }
              return res.json();
            })
            .then((json) => {
              alert(message);
            });
        },
        onCancel() {
          alert("Payment transaction aborted");
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveFromCart = (productId, storeId) => {
    // Dispatch an action to remove the product from the cart
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: { productId, storeId }
    });
  };

  const handleAddressTypeChange = (event) => {
    setAddressType(event.target.value);

    // Calculate additional charge based on the address type
    if (event.target.value === "house") {
      setAdditionalCharge(5000);
    } else {
      setAdditionalCharge(0);
    }
  };

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <>
      <Nav />

      <div className="payment-container">
        <div className="payment-form">
          <h1>Review Your Order</h1>
          <div className="order-details">
            {cartState.cart.map((item) => (
              <div key={item.productId} className="item">
                <div className="item-info">
                    <img src={item.image} alt="" />
                    <label>
                    <p>{item.productName}</p>
                  <p>Quantity: {item.quantity}</p>
                    </label>
                </div>
                <div className="amt-rv">
                  <div className="item-amount">
                    &#x20A6; {item.amount.toLocaleString()}
                  </div>
                  <button
                    onClick={() =>
                      handleRemoveFromCart(item.productId, item.storeId)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="total-amount">
            <p>Total Amount:</p>
            <p className="amount">
              &#x20A6; {cartState.totalAmount.toLocaleString()}
            </p>
          </div>

          {/* Additional Fields */}
          <div className="additional-fields">
            <label>
              Full name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              State:
              <select value={state} onChange={(e) => setState(e.target.value)}>
                <option value="">Select State</option>
                <option value="abia">Abia</option>
                <option value="adamawa">Adamawa</option>
                <option value="akwa-ibom">Akwa Ibom</option>
                <option value="anambra">Anambra</option>
                <option value="bauchi">Bauchi</option>
                <option value="bayelsa">Bayelsa</option>
                <option value="benue">Benue</option>
                <option value="borno">Borno</option>
                <option value="cross-river">Cross River</option>
                <option value="delta">Delta</option>
                <option value="ebonyi">Ebonyi</option>
                <option value="edo">Edo</option>
                <option value="ekiti">Ekiti</option>
                <option value="enugu">Enugu</option>
                <option value="gombe">Gombe</option>
                <option value="imo">Imo</option>
                <option value="jigawa">Jigawa</option>
                <option value="kaduna">Kaduna</option>
                <option value="kano">Kano</option>
                <option value="katsina">Katsina</option>
                <option value="kebbi">Kebbi</option>
                <option value="kogi">Kogi</option>
                <option value="kwara">Kwara</option>
                <option value="lagos">Lagos</option>
                <option value="nasarawa">Nasarawa</option>
                <option value="niger">Niger</option>
                <option value="ogun">Ogun</option>
                <option value="ondo">Ondo</option>
                <option value="osun">Osun</option>
                <option value="oyo">Oyo</option>
                <option value="plateau">Plateau</option>
                <option value="rivers">Rivers</option>
                <option value="sokoto">Sokoto</option>
                <option value="taraba">Taraba</option>
                <option value="yobe">Yobe</option>
                <option value="zamfara">Zamfara</option>
              </select>
            </label>

            <label>
              City:
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
            <label>
              Address Type:
              <select value={addressType} onChange={handleAddressTypeChange}>
                <option value="pickup">SpartApp Pickup Point</option>
                <option value="house">
                  Set House Address (Additional ₦5000)
                </option>
              </select>
            </label>
          </div>

          <div className="navigation-buttons">
            <button className="payment-button" onClick={handleMakePayment}>
              Proceed to Pay
            </button>
            <button className="back-button" onClick={handleGoBack}>
              Back
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* <br /> */}
      <Footer />
    </>
  );
};

export default PaymentPage;
