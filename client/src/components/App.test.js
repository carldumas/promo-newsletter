// Libraries
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// Components
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const navLink = screen.getByText(/Menu/i);
  const subNavLinkHome = screen.getByText(/Registration Form/i);
  const subNavLinkAdmin = screen.getByText(/Admin Dashboard/i);
  const textElement = screen.getByText(/Promotions Newsletter/);
  const linkPrivacyPolicy = screen.getByText(/Privacy Policy/i);
  const linkTermAndConditions = screen.getByText(/Terms & Conditions/i);
  const linkContactUs = screen.getByText(/Contact Us/i);

  expect(navLink).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
  expect(subNavLinkHome).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
  expect(subNavLinkAdmin).toBeInTheDocument();
  expect(linkPrivacyPolicy).toBeInTheDocument();
  expect(linkTermAndConditions).toBeInTheDocument();
  expect(linkContactUs).toBeInTheDocument();
});
