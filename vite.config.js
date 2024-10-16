import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Cambia el puerto del servidor si es necesario
  },
  build: {
    outDir: 'dist', // Directorio de salida de la build
    sourcemap: true, // Para habilitar el mapa de fuentes (útil para debugging)
  },
  resolve: {
    alias: {
      '@': '/src', // Atajo para importar desde el directorio src
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase', // Convierte los nombres de las clases CSS a camelCase
    },
    test: {
      globals: true, // Permite usar globals como describe, it, expect sin importar
      environment: 'jsdom', // Simula un entorno de navegador
      setupFiles: './src/setupTests.js', // Archivo de configuración para pruebas
      css: true, // Habilita el procesamiento de CSS en pruebas
      // Puedes agregar más configuraciones según tus necesidades
    },
  },
});
