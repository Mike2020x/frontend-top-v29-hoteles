import { render, fireEvent, screen } from '@testing-library/react';
import Estrellas from './Estrellas';

describe('Estrellas', () => {
  test('debe renderizar correctamente', () => {
    // Arrange
    render(<Estrellas reviews={5} />);

    // Act
    const reviewText = screen.getByText('5 review');
    const stars = screen.getAllByRole('img');

    // Assert
    expect(reviewText).toBeInTheDocument();
    expect(stars.length).toBe(5);
  });

  test('debe cambiar el estado de las estrellas al hacer clic', () => {
    // Arrange
    render(<Estrellas reviews={3} />);
    const stars = screen.getAllByRole('img');

    // Act
    fireEvent.click(stars[2]);

    // Assert
    const checkedStars = screen.getAllByRole('img', { name: /Check/ });
    expect(checkedStars.length).toBe(3);
  });
});
