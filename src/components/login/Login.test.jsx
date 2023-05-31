import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login component', () => {
  test('logs in when login button is clicked', () => {
    render(<Login />);
    const loginButton = screen.getByRole('button', { name: /log in/i });
    fireEvent.click(loginButton);
    // Assert that the login logic is triggered, for example:
    // expect(loginLogicFunction).toHaveBeenCalled();
  });

  test('signs up when sign up button is clicked', () => {
    render(<Login />);
    const signUpLink = screen.getByRole('link', { name: /sign up/i });
    fireEvent.click(signUpLink);
    const signUpButton = screen.getByRole('button', { name: /sign up/i });
    fireEvent.click(signUpButton);
    // Assert that the sign up logic is triggered, for example:
    // expect(signUpLogicFunction).toHaveBeenCalled();
  });

  test('enters email and password in the login form', () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password123');
  });

  test('enters email and passwords in the sign up form', () => {
    render(<Login />);
    const signUpLink = screen.getByRole('link', { name: /sign up/i });
    fireEvent.click(signUpLink);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });

    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password123');
    expect(confirmPasswordInput.value).toBe('password123');
  });
});
