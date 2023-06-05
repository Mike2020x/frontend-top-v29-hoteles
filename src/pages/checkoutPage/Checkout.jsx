import BookingSummary from "../../components/bookingSummary/BookingSummary";
import PaymentOption from "../../components/paymentOption/PaymentOption";
import "./Checkout.scss"
export default function Checkout() {
  return (
    <div className="checkout-page">
      <BookingSummary />
      <PaymentOption />
    </div>
  )
}
