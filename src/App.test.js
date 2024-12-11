import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText('Welcome to DevOps Project');
  expect(welcomeElement).toBeInTheDocument();
});

test('renders simple description', () => {
  render(<App />);
  const descriptionElement = screen.getByText('This demonstrates the completed pipeline.');
  expect(descriptionElement).toBeInTheDocument();
});

test('renders simple description', () => {
  render(<App />);
  const descriptionElement = screen.getByText('Fl!!!');
  expect(descriptionElement).toBeInTheDocument();
});
