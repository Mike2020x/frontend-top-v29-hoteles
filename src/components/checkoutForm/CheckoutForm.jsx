import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(card);
    const card = elements.getElement(CardElement)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    console.log(paymentMethod);

    const payload = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        amount: 1000, // $10 en centavos
        paymentMethod,
      }),
    }
  };
  return (

    <form onSubmit={() => { handleSubmit }}>
      <CardElement />
      <button type="submit">Pay</button>
    </form >
  )
}

