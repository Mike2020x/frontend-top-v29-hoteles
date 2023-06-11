import { useState } from 'react';
import "./index.scss"
import { Link } from 'react-router-dom';
export default function PaymentOption() {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleMethodSelection = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className="payment">
      <h2>Payment Option:</h2>
      <div>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="tarjeta"
            checked={selectedMethod === 'tarjeta'}
            onChange={() => handleMethodSelection('tarjeta')}
          />
          Tarjeta de crédito/débito
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="paypal"
            checked={selectedMethod === 'paypal'}
            onChange={() => handleMethodSelection('paypal')}
          />
          PayPal
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="transferencia"
            checked={selectedMethod === 'transferencia'}
            onChange={() => handleMethodSelection('transferencia')}
          />
          Transferencia bancaria
        </label>
      </div>
      {selectedMethod && (
        <div>
          <h3>Has seleccionado: {selectedMethod}</h3>
          {/* Aquí puedes mostrar información adicional del método de pago seleccionado */}
        </div>
      )}
      <Link to="/booking-success"><input className="info__pay-btn" type="submit" value="MAKE PAYMENT" /></Link>
    </div>
  );
}

