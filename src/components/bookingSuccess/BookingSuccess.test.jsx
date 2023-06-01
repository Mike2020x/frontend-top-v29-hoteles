import { render, screen } from '@testing-library/react';
import BookingSuccess from './BookingSuccess';

describe('BookingSuccess', () => {
  test('renders success message correctly', () => {
    render(<BookingSuccess />);

    // Check if the success message is rendered correctly
    const successMessage = screen.getByText(/Payment Successful !/i);
    expect(successMessage).toBeInTheDocument();

    // Check if the download invoice button is rendered
    const downloadInvoiceButton = screen.getByText(/Download Invoice/i);
    expect(downloadInvoiceButton).toBeInTheDocument();
  });

  test('renders transaction ID correctly', () => {
    render(<BookingSuccess />);

    // Check if the transaction ID is rendered correctly
    const transactionId = screen.getByText(/Your transaction ID is -SHJG12155215-/i);
    expect(transactionId).toBeInTheDocument();
  });

});
