// src/components/GuestsInput.js

import ErrorMessage from './ErrorMessage';

const GuestsInput = ({ guests, setGuests, error }) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor="guests" className="block text-gray-600">
        Number of guests
      </label>
      <input
        type="number"
        onChange={(e) => setGuests(e.target.value)}
        value={guests}
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:border-gray-60 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        required
      />
      <ErrorMessage message={error} />
    </div>
  );
};

export default GuestsInput;
