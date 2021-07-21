import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "../element_component/Payment/Payment"
import ShowProduct from "../element_component/Payment/showProduct/ShowProduct"
import './Payment.css'

const PUBLIC_KEY = "pk_test_51JDoXZHNJgBBTVaFOz88r8i8qTFhQRatqBXcjWDmZ8zaLgg7TvAqXk7qCNvkcoLHK2z28Umono5HTQpVHtt6jtYX00hv9zU3LH"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer( {location} ) {
  const {cart} = location
  console.log(cart)
	return (
    <div  className='payment-container'>
      {cart?.carts.length > 0 && (<div className='payment-details'>
        <h3>$ {cart?.prixTotal}</h3> 
        <div>
          {
            cart?.carts.map(el=> {
              return <ShowProduct key={el._id} product={el} />
            })
          }
        </div>
      </div>)}
      <div className='payment-cart'>
        <Elements stripe={stripeTestPromise}>
          <PaymentForm  prixTotal={cart?.prixTotal}/>
        </Elements>
      </div>
    </div>
		
	)
}