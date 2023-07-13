import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import BookingSummary from "../../components/bookingSummary/BookingSummary";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm"
import "./Checkout.scss"

const stripePromise = loadStripe('pk_test_51NRePDChrlYiKVZXLI7OtIoZzDyUydZfgw3M41LVs9YyTb05Q7qFS7G3TdsTUz7cdb6gbSc3GEp89WysdnvGOG7S007KjZ1EUQ');

export default function Checkout() {
  return (
    <div className="checkout-page">
      <BookingSummary />
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  )
}
