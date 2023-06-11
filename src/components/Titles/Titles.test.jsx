import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Titles from './Titles';

describe('Titles component', () => {
  test('renders titles and search box correctly', () => {
    // Arrange

    // Act
    render(
      <BrowserRouter>
        <Titles />
      </BrowserRouter>
    );

    // Assert
    const titleElement = screen.getByText('BOOK ROOMS, HOMES & APTS');
    expect(titleElement).toBeInTheDocument();

    const hotelLabel = screen.getByText('HOTEL');
    expect(hotelLabel).toBeInTheDocument();

    const checkInLabel = screen.getByText('CHECK IN');
    expect(checkInLabel).toBeInTheDocument();

    const checkOutLabel = screen.getByText('CHECK OUT');
    expect(checkOutLabel).toBeInTheDocument();

    const guestsLabel = screen.getByText('GUESTS');
    expect(guestsLabel).toBeInTheDocument();

    const searchButton = screen.getByRole('link', { name: /search/i });
    expect(searchButton).toBeInTheDocument();
    expect(searchButton).toHaveAttribute('href', '/hotel-list');
  });
});
