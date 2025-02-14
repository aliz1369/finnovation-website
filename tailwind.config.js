/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        21: "5.25rem", // Yaklaşık 84px
        22: "5.5rem", // Yaklaşık 88px
        23: "5.75rem", // Yaklaşık 92px
        24: "6rem", // Yaklaşık 96px
        25: "6.25rem", // Yaklaşık 100px
        26: "6.5rem", // Yaklaşık 104px
        27: "6.75rem", // Yaklaşık 108px
        28: "7rem", // Yaklaşık 112px
        29: "7.25rem", // Yaklaşık 116px
        30: "7.5rem", // Yaklaşık 120px
      },
      fontSize: {
        // Headings
        h1: [
          "5rem",
          {
            // 80px for web
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            "@screen sm": {
              fontSize: "2.5rem", // 40px for mobile
            },
          },
        ],
        h2: [
          "2rem",
          {
            // 32px for web
            lineHeight: "1.2",
            letterSpacing: "-0.01em",
            "@screen sm": {
              fontSize: "1.5rem", // 24px for mobile
            },
          },
        ],
        // Paragraph
        base: [
          "1.125rem",
          {
            // 18px for web
            lineHeight: "1.6",
            "@screen sm": {
              fontSize: "1rem", // 16px for mobile
            },
          },
        ],
      },
      fontFamily: {
        segouie: ["SegoeUI", "sans-serif"],
      },
    },
  },
  plugins: [],
};
