/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        heartbeat: 'heartbeat 1.5s ease-in-out infinite', // Duración y tipo de animación
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' }, // Tamaño normal
          '30%': { transform: 'scale(1.15)' }, // Aumenta de tamaño
          '60%': { transform: 'scale(0.95)' }, // Reduce ligeramente el tamaño
        },
      },
    },
  },
  plugins: [],
};
