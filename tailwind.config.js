// tailwind.config.js

module.exports = {
    darkMode: 'media',
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './public/index.html'
    ],
    theme: {
      extend: {
        // Font family
        fontFamily: {
          lora: ['Lora', 'sans-serif']
        },

        spacing: {
          'container': '1170px',
          '0': '0',
          '1': '4px',
          '2': '8px',
          '3': '12px',
          '4': '16px',
          '5': '20px',
          '6': '24px',
          '8': '32px',
          '10': '40px',
          '12': '48px',
          '16': '64px',
          '20': '80px',
          '24': '96px',
          '32': '128px',
          '40': '160px',
          '48': '192px',
          '56': '224px',
          '64': '256px',
          '72': '288px',
          '80': '320px',
          '88': '352px', 
          '96': '384px'
        },

        colors: {
          "green-primary" : "#0C713D",
        },

        screens: {
          'xs': '320px',
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        },

      }
    }
    // ...
  }
  