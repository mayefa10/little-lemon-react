// src/components/DatePicker.js
import ErrorMessage from '../components/ErrorMessage';

const DatePicker = ({ resDate, setResDate, error }) => {
  return (
    <div className="flex flex-col w-full max-w-sm min-w-[200px] mb-4">
      <label htmlFor="res-date" className="block text-gray-600">
        Choose date
      </label>
      <input
        type="date"
        id="res-date"
        value={resDate}
        onChange={(e) => setResDate(e.target.value)}
        required
        className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:border-gray-60 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      <ErrorMessage message={error} />
    </div>
  );
};

export default DatePicker;
