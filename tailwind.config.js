module.exports = {
  content: ["./src/**/*.{html,js}", "*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
    extend: {
      colors: {
        blue: {
          150: "#eef3ff",
          250: "#2d4dcb",
          750: "#164DBC",
          850: "#0829B1",
          950: "#1f3e72",
        },
        brown: {
          900: "#AA6F6F",
        },
        gray: {
          150: "#F2F4F8",
          350: "#BFC1D1",
          550: "#9498A5",
          650: "#f4f6fb",
        },
        zinc: {
          850: "#333751",
        },
      },
    },
  },
  plugins: [],
};
