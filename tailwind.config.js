// tailwind.config.ts


const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: '#1A73E8', // Bright Blue (Main Accent)
          dark: '#0D1B4C',    // Dark Blue (Headers, Buttons)
          gradientStart: '#3F51B5', // Gradient Start (Purple Hint)
          gradientEnd: '#1E3A8A',   // Gradient End (Blue)
        },
        // Background Colors
        background: {
          DEFAULT: '#FFFFFF', // Primary White Background
          light: '#F7F7F7',  // Light Gray Section Background
          deep: '#0D1B4C',   // Deep Blue Section Background (for dark footer)
        },
        // Card & Box Colors
        card: {
          DEFAULT: '#FFFFFF', // Card Background
          hover: '#F0F4FF',   // Card Hover Background
          border: '#E2E8F0',  // Card Border
        },
        // Text / Font Colors
        text: {
          heading: '#0D1B4C',    // Primary Heading (Dark)
          secondary: '#1A73E8',  // Secondary Heading
          body: '#4A4A4A',       // Body Text
          light: '#FFFFFF',      // Light Text on Dark Sections
        },
        // Hover & Action Colors
        action: {
          button: '#1A73E8',      // Primary Button Background
          buttonHover: '#0F5CC0', // Primary Button Hover
          linkHover: '#3F51B5',   // Link Hover
        },
        // Extra Accent Colors
        accent: {
          purple: '#6C63FF',      // Purple Accent (for Highlights)
          lightBlue: '#E3F2FD',  // Light Blue Accent (Icons)
        },
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(135deg, #3F51B5, #1A73E8, #1E3A8A)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;


