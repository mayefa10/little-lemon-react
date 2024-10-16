
// src/components/ReservationsList.js
import { useEffect, useState } from 'react';
import { getReservationsAPI } from '../api/api';

const BookingSlot = () => {
    const [reservations, setReservations] = useState([]);

    // Obtener las reservas al montar el componente
    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = () => {
        const data = getReservationsAPI();
        setReservations(data);
    };

    return (
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-2xl font-bold font-content mb-4 text-white-20">
          Reservas del Restaurante
        </h2>
        {reservations.length === 0 ? (
          <p>No hay reservas realizadas.</p>
        ) : (
          <table className="min-w-full bg-gray-60 border text-white-20">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Fecha</th>
                <th className="py-2 px-4 border-b">Hora</th>
                <th className="py-2 px-4 border-b">Invitados</th>
                <th className="py-2 px-4 border-b">Ocasión</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2 px-4 border-b">{reservation.resDate}</td>
                  <td className="py-2 px-4 border-b">{reservation.resTime}</td>
                  <td className="py-2 px-4 border-b">{reservation.guests}</td>
                  <td className="py-2 px-4 border-b">{reservation.occasion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <button
          onClick={fetchReservations}
          className="flexCenter font-semibold font-content rounded-[16px] bg-yellow-20 mt-4 w-[201px] h-[41px] border-yellow-20 hover:text-orange-40"
        >
          Refresh Reservations
        </button>
      </div>
    );
};

export default BookingSlot;
