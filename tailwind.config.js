/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
          colors: {
            neutral: {
              0: '#ffffff',
              1: '#fdfdfd',
              2: '#fcfcfb',
              3: '#fafafa',
              4: '#f9f9f8',
              5: '#f7f7f6',
              10: '#dfdedd',
              20: '#c6c5c3',
              30: '#aeadaa',
              40: '#969491',
              50: '#7d7b77',
              60: '#65625e',
              70: '#4d4a45',
              80: '#34312b',
              90: '#1c1812',
              100: '#000000',
            },
            tan: {
              lighter: '#f1ece1',
              light: '#e4d9c3',
              DEFAULT: '#ddcfb4',
              dark: '#b1a690',
              darker: '#857c6c',
            },
            brown: {
              lighter: '#978f84',
              light: '#74695b',
              DEFAULT: '#514432',
              dark: '#31291e',
              darker: '#201b14',
            },
          },
          spacing: {
            1: '0.0625rem',
            2: '0.125rem',
            4: '0.25rem',
            8: '0.5rem',
            12: '0.75rem',
            14: '0.875rem',
            16: '1rem',
            20: '1.25rem',
            24: '1.5rem',
            32: '2rem',
            40: '2.5rem',
            48: '3rem',
            56: '3.5rem',
            64: '4rem',
            72: '4.5rem',
            80: '5rem',
            96: '6rem',
          },
          fontFamily: {
            default: ['Inter', 'sans-serif'],
            alternate: ['Gluten', 'sans-serif'],
          },
          fontWeight: {
            regular: 400,
            semibold: 600,
          },
          lineHeight: {
            none: 1,
            tight: 1.125,
            default: 1.25,
            loose: 1.5,
          },
          fontSize: {
            // Heading
            headingLarge: '3.5rem',
            headingMedium: '3rem',
            headingDefault: '2.5rem',
            headingSmall: '2rem',
            // Body
            bodyLarge: '1.5rem',
            bodyMedium: '1.25rem',
            bodyDefault: '1rem',
            bodySmall: '0.875rem',
            bodyCaption: '0.75rem',
            // Accent
            accent: '2rem',
          },
          screens: {
            xs: '480px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
          },
        },
      },
};

  