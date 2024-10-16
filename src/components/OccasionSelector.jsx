// src/components/OccasionSelector.js

import ErrorMessage from '../components/ErrorMessage';

const OccasionSelector = ({ occasion, setOccasion, error }) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor="occasion" className="block text-gray-600">
        Occasion
      </label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
        className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:border-gray-60 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      >
        <option value="" disabled>
          Select Occasion
        </option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <ErrorMessage message={error} />
    </div>
  );
};

export default OccasionSelector;
