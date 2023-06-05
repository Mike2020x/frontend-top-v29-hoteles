import './index.scss'

export default function NotFound() {
  return (
    <div>
      <h2 className="content__notFound--title"><strong>404 NOT FOUND</strong></h2>
      <div className="content__notFound--description">
        <div className="content__notFound--image">
          <img src="/room.jpg" alt="Imagen de espantapájaros" />
        </div>
        <div className="content__notFound--text">
          <h1>Booking Not Found</h1>
          <div className="content__notFound--text-message">
            <p className="frase">We are sorry, but the booking you are looking for could not be found.</p>
            <p className="frase">Please check your booking details or contact our support team for further assistance.</p>
          </div>
          <button>BACK TO HOMEPAGE</button>
        </div>
      </div>
    </div>
  );
}
