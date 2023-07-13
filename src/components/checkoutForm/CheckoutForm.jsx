import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./index.scss"
export default function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    console.log("🚀 ~ file: CheckoutForm.jsx:11 ~ handleSubmit ~ paymentMethod:", paymentMethod)

    //POST paymentMethod.id to your backend
    const payload = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: 1000, // $10 en centavos
        paymentMethod,
      }),
    }

    const response = await fetch(`${import.meta.env.API_BASE_URL}/api/payment`, payload);
    const data = await response.json();
    console.log(data);
  };

  return (

    <form onSubmit={handleSubmit} className="form">
      <CardElement />
      <button type="submit" className="pay-btn">Pay</button>
    </form >
  )
}

