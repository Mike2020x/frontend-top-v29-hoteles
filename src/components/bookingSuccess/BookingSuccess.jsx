import "./index.scss";

export default function BookingSuccess() {
  return (
    <div className="success">
      <img className="success__img" src="https://picsum.photos/200/200" alt="photo" />

      <h1 className="success__title">Payment Successful ! Get Ready For Comfortable Stay.</h1>

      <p className="success__text">Thank you for your payment. We have received your Payment Succesfully. Your transaction ID is -SHJG12155215-,You Will get an Email Invoice Soon!</p>

      <button className="success__btn">Download Invoice</button>

    </div>
  )
}
