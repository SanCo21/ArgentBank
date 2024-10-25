import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Argent Bank link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Argent Bank/i);
  expect(linkElement).toBeInTheDocument();
});
