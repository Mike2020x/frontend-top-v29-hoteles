import { useState } from "react";
import "./index.scss";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const subscribeToNewsletter = (email) => {
    return fetch("https://tu-api.com/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to subscribe. Please try again.");
        }
      })
      .catch((error) => {
        throw new Error("Failed to subscribe. Please try again.");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    setIsLoading(true);
    setError("");

    subscribeToNewsletter(email)
      .then(() => {
        setIsSubscribed(true);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  return (
    <div className="subscription-form">
      <h3 className="subscription-form__title">Subscribe to our Newsletter</h3>
      {isSubscribed ? (
        <p className="subscription-form__message">Thank you for subscribing!</p>
      ) : (
        <>
          <p className="subscription-form__description">
            Get the latest updates and special offers directly in your inbox.
          </p>
          <form onSubmit={handleSubmit} className="subscription-form__form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="subscription-form__input"
              required
            />
            {error && <p className="subscription-form__error">{error}</p>}
            <button
              type="submit"
              className="subscription-form__button"
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default SubscriptionForm;
