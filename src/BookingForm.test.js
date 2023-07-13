import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BookingForm from '../src/components/BookingForm';

test('submits the form with valid data', () => {
  // Mock submit handler function
  const handleSubmit = jest.fn();

  // Render the BookingForm component
  const { getByLabelText, getByText } = render(<BookingForm onSubmit={handleSubmit} />);

  // Get form input elements
  const nameInput = getByLabelText('Name');
  const emailInput = getByLabelText('Email');
  const submitButton = getByText('Submit');

  // Fill in the form fields
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });

  // Submit the form
  fireEvent.click(submitButton);

  // Check if the submit handler function was called correctly
  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith({ name: 'John Doe', email: 'john@example.com' });
});
