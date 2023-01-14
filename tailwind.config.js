/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#22d3ee',
          secondary: '#a78bfa',
          accent: '#f472b6',
          neutral: '#374151',
          'neutral-content': '#fff',
          'base-100': '#111827',
          'base-200': '#1f2937',
          'base-300': '#374151',
          info: '#8b5cf6',
          success: '#4ade80',
          warning: '#fef08a',
          error: '#f87171',
        },
      },
      'light',
    ],
  },
}
