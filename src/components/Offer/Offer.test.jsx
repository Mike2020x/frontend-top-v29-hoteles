import { render, screen } from '@testing-library/react';
import Offer from './Offer';

describe('Offer component', () => {
  const props = {
    imageOferta: 'image-url',
    title: 'Test Title',
    description: 'Test Description',
  };

  it('renders the component with correct props', () => {
    render(<Offer {...props} />);

    // Verify that the image is rendered with the correct URL
    const image = screen.getByAltText(props.imageOferta);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', props.imageOferta);
    expect(image).toHaveAttribute('width', '200px');

    // Verify that the title and description are rendered correctly
    const title = screen.getByText(props.title);
    const description = screen.getByText(props.description);
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });


});
