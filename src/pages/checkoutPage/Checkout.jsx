import BookingSummery from "../../components/bookingSummary/BookingSummery";
import PaymentOption from "../../components/paymentOption/PaymentOption";
import "./Checkout.scss"
export default function Checkout() {
  return (
    <div className="checkout-page">
      <BookingSummery />
      <PaymentOption />
    </div>
  )
}
