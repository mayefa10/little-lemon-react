// src/api.js

// Función para generar números aleatorios basados en una semilla
export const seededRandom = function (seed) {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function () {
    s = (s * a) % m;
    return s / m;
  };
};

// Función para obtener horarios disponibles basados en la fecha
export const fetchAPI = function (date) {
  const result = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(`${i}:00`);
    }
    if (random() < 0.5) {
      result.push(`${i}:30`);
    }
  }
  return result;
};

// Función para enviar una reserva (almacena en localStorage)
export const submitAPI = function (formData) {
  const existingReservations =
    JSON.parse(localStorage.getItem('reservations')) || [];
  existingReservations.push(formData);
  localStorage.setItem('reservations', JSON.stringify(existingReservations));
  console.log('Reserva enviada a la API:', formData);
  return true; // Simula una respuesta exitosa
};

// Función para obtener todas las reservas
export const getReservationsAPI = function () {
  return JSON.parse(localStorage.getItem('reservations')) || [];
};
