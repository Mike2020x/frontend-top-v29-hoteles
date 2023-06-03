import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import "./index.scss"


function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleOnChange = (value) => {
    setPhoneNumber(value);
  };

  return (
    <div>
      <PhoneInput className="input"
        country={'us'}
        value={phoneNumber}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default PhoneNumberInput;
