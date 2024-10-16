// src/components/DatePicker.test.js
import { describe, test, expect, jest } from '@testing-library/jest-dom';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import DatePicker from '../DatePicker';

describe('DatePicker Component', () => {
  test('renders date input with label', () => {
    render(<DatePicker resDate="" setResDate={() => {}} error={null} />);
    const labelElement = screen.getByLabelText(/Choose date/i);
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute('type', 'date');
  });

  test('displays error message when error prop is provided', () => {
    render(
      <DatePicker resDate="" setResDate={() => {}} error="Fecha requerida." />
    );
    const errorElement = screen.getByText(/Fecha requerida./i);
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveClass('text-red-500');
  });

  test('calls setResDate on date change', () => {
    const mockSetResDate = jest.fn();
    render(<DatePicker resDate="" setResDate={mockSetResDate} error={null} />);
    const inputElement = screen.getByLabelText(/Choose date/i);
    fireEvent.change(inputElement, { target: { value: '2024-12-25' } });
    expect(mockSetResDate).toHaveBeenCalledWith('2024-12-25');
  });
});