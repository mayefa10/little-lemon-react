// src/components/TimePicker.js

import ErrorMessage from '../components/ErrorMessage';

const TimePicker = ({ resTime, setResTime, availableTimes, error }) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor="res-time" className="block text-gray-600">
        Choose time
      </label>
      <select
        id="res-time"
        value={resTime}
        onChange={(e) => setResTime(e.target.value)}
        required
        className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:border-gray-60 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        disabled={availableTimes.length === 0}
      >
        <option value="" disabled>
          {availableTimes.length > 0 ? 'Select Time' : 'Select a date first'}
        </option>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>
      <ErrorMessage message={error} />
    </div>
  );
};

export default TimePicker;
