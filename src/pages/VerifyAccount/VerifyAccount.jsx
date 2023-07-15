import { useParams } from "react-router-dom";
import "./index.scss";

export default function VerifyAccount() {
  const { token } = useParams();

  const handleClick = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/auth/local/activate/${token}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.success) {
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="verify-account-button">
        <img src="/hotel-booking-mir.jpg" alt="ocean and houses panorama" />
        <h2 className="verify-account-button__title">Verifica tu cuenta</h2>
        <h2 className="verify-account-button__description">
          Activate your account
        </h2>
        <p>Please click the button below to activate your account.</p>
        <button
          type="button"
          className="verify-account-button__button"
          onClick={handleClick}
        >
          Active account
        </button>
      </div>
    </>
  );
}
