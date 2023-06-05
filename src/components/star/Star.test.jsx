import { render, fireEvent } from '@testing-library/react';
import Star from './Star';

describe('Star component', () => {
  test('renders the correct number of stars', () => {
    // Arrange
    const { getAllByAltText } = render(<Star />);

    // Act
    const stars = getAllByAltText(/star/);

    // Assert
    expect(stars.length).toBe(5);
  });

  test('updates the star ratings when clicked', () => {
    // Arrange
    const { getAllByAltText } = render(<Star />);
    const stars = getAllByAltText(/star/);

    // Act
    fireEvent.click(stars[2]);

    // Assert
    const updatedStars = getAllByAltText(/star/);
    expect(updatedStars[0]).toHaveAttribute('src', '/starCheck.jpg');
    expect(updatedStars[1]).toHaveAttribute('src', '/starCheck.jpg');
    expect(updatedStars[2]).toHaveAttribute('src', '/starCheck.jpg');
    expect(updatedStars[3]).toHaveAttribute('src', '/star.jpg');
    expect(updatedStars[4]).toHaveAttribute('src', '/star.jpg');
  });
});
