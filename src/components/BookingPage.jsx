import { useState } from 'react';
import BookingForm from './BookingForm';
import BookingSlot from './BookingSlot';

const BookingPage = () => {
  const [activeTab, setActiveTab] = useState('book');
  const [refresh, setRefresh] = useState(false);
  const handleReservationMade = () => {
    // Cambiar el estado para forzar la actualización de ReservationsList
    setRefresh(!refresh);
  };
  return (
    <div className="bg-reservations bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="">
        <button
          onClick={() => setActiveTab('book')}
          className={`flexCenter font-semibold font-content rounded-[16px] bg-yellow-20 mt-4 w-[201px] h-[41px] border-yellow-20 hover:text-orange-40 ${
            activeTab === 'book'
              ? 'bg-yellow-20 text-white-20 font-content'
              : 'text-gray-700 hover:bg-gray-200'
          }`}
        >
          Make Reservation
        </button>
        <button
          onClick={() => setActiveTab('reservations')}
          className={`flexCenter font-semibold font-content rounded-[16px] bg-yellow-20 mt-4 w-[201px] h-[41px] border-yellow-20 hover:text-orange-40 ${
            activeTab === 'reservations'
              ? 'bg-yellow-20 text-white-20'
              : 'text-gray-700 hover:bg-gray-200'
          }`}
        >
          See Reservations
        </button>
        <div className="py-10">
          {activeTab === 'book' ? (
            <BookingForm onReservationMade={handleReservationMade} />
          ) : (
            <BookingSlot key={refresh} />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
