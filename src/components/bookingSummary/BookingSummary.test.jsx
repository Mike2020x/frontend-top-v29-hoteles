import { render } from '@testing-library/react';
import BookingSummary from './BookingSummary';

describe('BookingSummary', () => {
  test('renders hotel information correctly', () => {
    const { getByAltText, getByText } = render(<BookingSummary />);

    expect(getByAltText('hotel-img')).toBeInTheDocument();
    expect(getByText('Sea view Hotel')).toBeInTheDocument();
    expect(getByText('Mina Road,Bur Dubai,Dubai')).toBeInTheDocument();
  });

  test('renders check-in and check-out information correctly', () => {
    const { getByText } = render(<BookingSummary />);

    expect(getByText('Check In')).toBeInTheDocument();
    expect(getByText('Check In time')).toBeInTheDocument();
    expect(getByText('2:00 pm')).toBeInTheDocument();
    expect(getByText('Check Out')).toBeInTheDocument();
    expect(getByText('Check Out time')).toBeInTheDocument();
  });

  test('renders booking details correctly', () => {
    const { getByText } = render(<BookingSummary />);

    expect(getByText('2 Guest, 1 Deluxe Room,3 Night')).toBeInTheDocument();
    expect(getByText('Edit')).toBeInTheDocument();
  });

  test('renders payment details correctly', () => {
    const { getByText } = render(<BookingSummary />);

    expect(getByText('Payment Details')).toBeInTheDocument();
    expect(getByText('Base Price')).toBeInTheDocument();
    expect(getByText('Promo Discount')).toBeInTheDocument();
    expect(getByText('Tax & Service Fees')).toBeInTheDocument();
    expect(getByText('$2510')).toBeInTheDocument();
    expect(getByText('$250')).toBeInTheDocument();
    expect(getByText('$150')).toBeInTheDocument();
    expect(getByText('Payable Amount')).toBeInTheDocument();
    expect(getByText('$2410')).toBeInTheDocument();
  });
});
