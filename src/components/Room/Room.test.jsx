import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Room from './Room';

describe('Room component', () => {
  test('renders room card with correct data', () => {
    // Arrange
    const title = 'Room Title';
    const image = 'image-url';
    const beforePrice = '$100';
    const nowPrice = '$80';

    // Act
    render(
      <BrowserRouter>
        <Room
          title={title}
          image={image}
          beforePrice={beforePrice}
          nowPrice={nowPrice}
        />
      </BrowserRouter>
    );

    // Assert
    const roomTitle = screen.getByText(title);
    expect(roomTitle).toBeInTheDocument();

    const roomImage = screen.getByAltText('image');
    expect(roomImage).toHaveAttribute('src', image);

    const amenitiesTitle = screen.getByRole('heading', { name: /amenities/i });
    expect(amenitiesTitle).toBeInTheDocument();

    const inclusionTitle = screen.getByRole('heading', { name: /inclusion/i });
    expect(inclusionTitle).toBeInTheDocument();

    const beforePriceElement = screen.getByText(beforePrice);
    expect(beforePriceElement).toBeInTheDocument();

    const nowPriceElement = screen.getByText(nowPrice);
    expect(nowPriceElement).toBeInTheDocument();

    const bookNowButton = screen.getByRole('link', { name: /book now/i });
    expect(bookNowButton).toHaveAttribute('href', '/summary');
  });
});
