// src/components/SubmitButton.js


const SubmitButton = ({ loading }) => {
  return (
    <input
      type="submit"
      value={loading ? 'Submitting...' : 'Make Your Reservation'}
      className={`bg-orange-500 hover:bg-orange-700 text-white font-semibold rounded-md py-2 px-4 w-full ${
        loading ? 'cursor-not-allowed opacity-50' : ''
      }`}
      disabled={loading}
    />
  );
};

export default SubmitButton;
