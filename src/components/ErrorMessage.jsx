// src/components/ErrorMessage.js

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return <p className="text-red-500 text-sm mt-1">{message}</p>;
};

export default ErrorMessage;
