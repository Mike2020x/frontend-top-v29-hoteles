
import { screen, render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders without errors', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('contains specific elements', () => {
    render(<Footer />);
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument();
    expect(screen.getByTestId("content")).toBeInTheDocument();
    expect(screen.getByText('A-32,Albany,Newyork')).toBeInTheDocument();
    expect(screen.getByText('518-457-5181')).toBeInTheDocument();
    expect(screen.getByText('contact@gmail.com')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(14);
    expect(screen.getAllByRole('img')).toHaveLength(8);
  });

  it('applies styles correctly', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer')).toHaveClass('footer');
    expect(screen.getByText('Contact Us')).toHaveClass('hide__contact');
  });

  it('displays icons correctly', () => {
    render(<Footer />);
    expect(screen.getByTestId('icons')).toBeInTheDocument();
  });

  it('displays images correctly', () => {
    render(<Footer />);
    expect(screen.getAllByRole('img')).toHaveLength(8);
  });


});
