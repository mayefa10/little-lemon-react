// src/api.test.js
import { describe, beforeEach, test, expect } from '@testing-library/jest-dom';
import { seededRandom, fetchAPI, submitAPI, getReservationsAPI } from './api';

describe('API Functions', () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba
    localStorage.clear();
  });

  describe('seededRandom', () => {
    test('generates consistent random numbers with the same seed', () => {
      const random1 = seededRandom(10);
      const random2 = seededRandom(10);

      expect(random1()).toBe(random2());
      expect(random1()).toBe(random2());
    });

    test('generates different sequences with different seeds', () => {
      const random1 = seededRandom(10);
      const random2 = seededRandom(20);

      expect(random1()).not.toBe(random2());
    });
  });

  describe('fetchAPI', () => {
    test('returns an array of available times based on date', () => {
      const date = new Date('2024-12-25');
      const availableTimes = fetchAPI(date);
      expect(Array.isArray(availableTimes)).toBe(true);
      // La cantidad exacta de tiempos puede variar según la lógica
      expect(availableTimes.length).toBeGreaterThan(0);
      availableTimes.forEach((time) => {
        expect(typeof time).toBe('string');
        expect(time).toMatch(/^\d{2}:\d{2}$/);
      });
    });
  });

  describe('submitAPI', () => {
    test('stores reservation in localStorage', () => {
      const reservation = {
        resDate: '2024-12-25',
        resTime: '18:00',
        guests: '4',
        occasion: 'Birthday',
      };

      const result = submitAPI(reservation);
      expect(result).toBe(true);

      const storedReservations = JSON.parse(
        localStorage.getItem('reservations')
      );
      expect(storedReservations).toHaveLength(1);
      expect(storedReservations[0]).toEqual(reservation);
    });

    test('appends reservation to existing reservations in localStorage', () => {
      const reservation1 = {
        resDate: '2024-12-25',
        resTime: '18:00',
        guests: '4',
        occasion: 'Birthday',
      };

      const reservation2 = {
        resDate: '2024-12-31',
        resTime: '19:30',
        guests: '2',
        occasion: 'Anniversary',
      };

      submitAPI(reservation1);
      submitAPI(reservation2);

      const storedReservations = JSON.parse(
        localStorage.getItem('reservations')
      );
      expect(storedReservations).toHaveLength(2);
      expect(storedReservations).toContainEqual(reservation1);
      expect(storedReservations).toContainEqual(reservation2);
    });
  });

  describe('getReservationsAPI', () => {
    test('retrieves reservations from localStorage', () => {
      const reservations = [
        {
          resDate: '2024-12-25',
          resTime: '18:00',
          guests: '4',
          occasion: 'Birthday',
        },
        {
          resDate: '2024-12-31',
          resTime: '19:30',
          guests: '2',
          occasion: 'Anniversary',
        },
      ];

      localStorage.setItem('reservations', JSON.stringify(reservations));

      const retrievedReservations = getReservationsAPI();
      expect(retrievedReservations).toEqual(reservations);
    });

    test('returns empty array if no reservations exist', () => {
      const retrievedReservations = getReservationsAPI();
      expect(retrievedReservations).toEqual([]);
    });
  });
});
