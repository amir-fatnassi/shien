import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import {ClearCart} from '../../../redux/shopping/shopping-action'

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      height: '30px',
      color: "#000",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#000" },
      "::placeholder": { color: "#000" },
    },
    invalid: {
      iconColor: "#000",
      color: "#000",
    },
  },
};

export default function PaymentForm({ prixTotal }) {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    console.log(paymentMethod);
    console.log(error);

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("booking/checkout-session", {
          amount: prixTotal * 1000,
          id,
        });
        console.log(response);
        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };
const myFunction = () => {
      dispatch(ClearCart(history))
      setTimeout( alert("success  thank you for visit ") , 1000);
    }

  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          {/* <input type="text" className='input-box-sign'/>
          <input type="text" className='input-box-sign'/> */}
          <input type="text" className='input-box' placeholder='Ferst Name'/>
          <input type="text" className='input-box' placeholder='Last Name'/>
          <input type="text" className='input-box' placeholder='email@exemple.com'/>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button className='input-button' >Pay</button>
        </form>
      ) : (myFunction())}
    </>
  );
}
