// src/components/BookingForm.js
// src/components/BookingForm.js
import { useState, useEffect } from 'react';
import logo from '../assets/Logo .svg';
import DatePicker from '../components/DatePicker';
import TimePicker from './TimePicker';
import OccasionSelector from './OccasionSelector';
import SubmitButton from './SubmitButton';
import GuestsInput from './GuestsInput';
import { fetchAPI, submitAPI } from '../api/api';


const BookingForm = ({ onReservationMade }) => {
  // Inicializar estados para cada campo del formulario
  const [resDate, setResDate] = useState('');
  const [resTime, setResTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);
  const [loading, setLoading] = useState(false); // Estado para el envío del formulario
  const [error, setError] = useState(null); // Estado para manejar errores generales
  const [success, setSuccess] = useState(false); // Estado para manejar el éxito
  const [errors, setErrors] = useState({}); // Estado para errores específicos de cada campo

  // Efecto para actualizar los tiempos disponibles cuando cambia la fecha
  useEffect(() => {
    if (resDate) {
      const dateObj = new Date(resDate);
      const times = fetchAPI(dateObj);
      setAvailableTimes(times);
      setResTime(''); // Reiniciar la selección de tiempo cuando cambia la fecha
    } else {
      setAvailableTimes([]);
      setResTime('');
    }
  }, [resDate]);

  // Función de validación
  const validate = () => {
    const newErrors = {};

    // Validar Fecha
    if (!resDate) {
      newErrors.resDate = 'La fecha es requerida.';
    } else {
      const selectedDate = new Date(resDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Ignorar la hora
      if (selectedDate < today) {
        newErrors.resDate = 'La fecha no puede estar en el pasado.';
      }
    }

    // Validar Hora
    if (!resTime) {
      newErrors.resTime = 'La hora es requerida.';
    } else if (!availableTimes.includes(resTime)) {
      newErrors.resTime = 'Hora seleccionada no es válida.';
    }

    // Validar Número de Invitados
    if (!guests) {
      newErrors.guests = 'El número de invitados es requerido.';
    } else if (guests < 1 || guests > 10) {
      newErrors.guests = 'El número de invitados debe estar entre 1 y 10.';
    }

    // Validar Ocasión
    if (!occasion) {
      newErrors.occasion = 'La ocasión es requerida.';
    } else if (!['Birthday', 'Anniversary'].includes(occasion)) {
      newErrors.occasion = 'Ocasión seleccionada no es válida.';
    }

    setErrors(newErrors);

    // Retornar verdadero si no hay errores
    return Object.keys(newErrors).length === 0;
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Validar los campos antes de enviar
    if (!validate()) {
      setLoading(false);
      return;
    }

    const formData = {
      resDate,
      resTime,
      guests,
      occasion,
    };

    // Simular el envío a la API
    try {
      const result = submitAPI(formData);
      if (result) {
        setSuccess(true);
        // Opcional: Limpiar el formulario después de una reserva exitosa
        setResDate('');
        setResTime('');
        setGuests(1);
        setOccasion('');
        setAvailableTimes([]);
        setErrors({});

        // Notificar al componente padre que se hizo una reserva
        if (onReservationMade) {
          onReservationMade();
        }
      } else {
        setError('Error al procesar la reserva.');
      }
    } catch (err) {
      setError('Error al conectarse con la API.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        className="grid h-screen w-screen place-items-center bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 text-gray-60 font-semibold font-content"
        onSubmit={handleSubmit}
      >
        <div className="relative mx-auto w-full max-w-[24rem] overflow-hidden shadow-sm">
          <div className="relative flex flex-col bg-white-20 p-10 ">
            <img
              src={logo}
              alt="logo"
              className="bg-white-20"
              width={100}
              height={100}
            />

            {/* Fecha de Reserva */}
            <DatePicker
              resDate={resDate}
              setResDate={setResDate}
              error={errors.resDate}
            />

            {/* Hora de Reserva */}
            <TimePicker
              resTime={resTime}
              setResTime={setResTime}
              availableTimes={availableTimes}
              error={errors.resTime}
            />

            {/* Número de Invitados */}
            <GuestsInput
              guests={guests}
              setGuests={setGuests}
              error={errors.guests}
            />

            {/* Ocasión */}
            <OccasionSelector
              occasion={occasion}
              setOccasion={setOccasion}
              error={errors.occasion}
            />

            {/* Botón de Envío */}
            <SubmitButton loading={loading} />

            {/* Mensajes de Error y Éxito Generales */}
            {error && <p className="text-red-600 mt-4">{error}</p>}
            {success && (
              <p className="text-green-600 mt-4">¡Reserva exitosa!</p>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
