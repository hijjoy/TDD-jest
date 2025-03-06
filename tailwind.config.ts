/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Pretendard: ["Pretendard", "sans-serif"],
    },
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite", // 10초 동안 한 바퀴 회전
      },
      screens: { "lg-custom": "1100px" },
      fontSize: {
        h0: [
          "32px",
          {
            lineHeight: "1.35",
            letterSpacing: "-0.005em",
            fontWeight: 600,
          },
        ],
        h1: [
          "28px",
          {
            lineHeight: "1.35",
            letterSpacing: "-0.005em",
            fontWeight: 600,
          },
        ],
        h2: [
          "24px",
          {
            lineHeight: "1.35",
            letterSpacing: "-0.005em",
            fontWeight: 600,
          },
        ],
        h3: [
          "20px",
          {
            lineHeight: "1.35",
            letterSpacing: "-0.005em",
            fontWeight: 600,
          },
        ],
        h4: [
          "18px",
          {
            lineHeight: "1.35",
            letterSpacing: "-0.005em",
            fontWeight: 600,
          },
        ],
        h5: [
          "16px",
          {
            lineHeight: "1.35",
            letterSpacing: "-0.005em",
            fontWeight: 600,
          },
        ],
        "h5-2": [
          "15px",
          {
            lineHeight: "1.35",
            letterSpacing: "-0.005em",
            fontWeight: 600,
          },
        ],
        h6: [
          "14px",
          {
            lineHeight: "1.35",
            letterSpacing: "-0.005em",
            fontWeight: 600,
          },
        ],
        h7: [
          "13px",
          {
            lineHeight: "1.35",
            letterSpacing: "-0.005em",
            fontWeight: 600,
          },
        ],
        "body0-2": [
          "28px",
          {
            lineHeight: "1.35",
            letterSpacing: "-0.02em",
            fontWeight: 400,
          },
        ],
        body0: [
          "18px",
          {
            lineHeight: "1.35",
            letterSpacing: "-0.02em",
            fontWeight: 400,
          },
        ],
        body1: [
          "16px",
          {
            lineHeight: "1.35",
            letterSpacing: "-0.02em",
            fontWeight: 400,
          },
        ],
        body2: [
          "15px",
          {
            lineHeight: "1.35",
            letterSpacing: "-0.02em",
            fontWeight: 400,
          },
        ],
        body3: [
          "14px",
          {
            lineHeight: "1.35",
            letterSpacing: "-0.02em",
            fontWeight: 400,
          },
        ],
        body4: [
          "13px",
          {
            lineHeight: "1.35",
            letterSpacing: "-0.02em",
            fontWeight: 400,
          },
        ],
      },
      colors: {
        main: {
          black: "#121212",
          white: "#ffffff",
          pink: "#E36B88",
          "deep-pink": "#F06485",
        },
        neutral: {
          "000": "#FFFFFF",
          100: "#EAEBEE",
          200: "#ADB1BA",
          300: "#868B94",
          400: "#6D717A",
          500: "#4D4F54",
          600: "#2B2E33",
          700: "#212124",
          800: "#17171A",
        },
        orange: {
          50: "#FDF5F3",
          100: "#FCE8E4",
          200: "#FBD5CD",
          300: "#F7B8AA",
          400: "#E5684C",
          500: "#D24E30",
          600: "#B03E25",
          700: "#B32F1B",
          800: "#8F281D",
        },
        purple: {
          50: "#EFEFFD",
          100: "#E7E7FD",
          200: "#CDCDFA",
          300: "#5D5FEF",
          400: "#5456D7",
          500: "#4A4CBF",
          600: "#4647B3",
          700: "#38398F",
          800: "#2A2B6C",
        },
        yellow: {
          100: "#FFDE59",
        },
        blue: {
          100: "#C2D8F8",
          200: "#4B93FF",
          300: "#0066FF",
        },
        profile: {
          coral: "#E5684C",
          "dark-blue": "#5456D7",
          "sky-blue": "#0091FF",
          violet: "#A463FF",
          green: "#00B57C",
        },
      },
      borderRadius: {
        "3xl": "20px",
        "4xl": "24px",
      },
      boxShadow: {
        custom:
          "0 2px 5px rgba(0, 0, 0, .03), 0 6px 3px rgba(0, 0, 0, .02), 0 8px 10px rgba(0, 0, 0, .02)",
        "hover-custom":
          "0 2px 10px rgba(0, 0, 0, 0.08), 0 6px 6px rgba(0, 0, 0, 0.06), 0 8px 20px rgba(0, 0, 0, 0.06)",
        "hover-pink": "rgba(239,101,129, 0.4) 0px 0px 0px 3px",
        "hover-gray": "rgba(0, 0, 0, 0.01) 0px 0px 0px 3px",
      },
      backgroundImage: {
        "main-gradient": "linear-gradient(240deg, #F06485 0%, #ff9a9e 100%)",
        "second-gradient":
          "linear-gradient(180deg, #fff 0% ,#FDF0F3 50%, #fff 100%)",
        "gray-gradient": "linear-gradient(240deg, #9E9E9E 0%, #E0E0E0 100%)",
      },
    },
  },
  plugins: [],
};
