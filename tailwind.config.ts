import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "1230px",
        "2xl": "1230px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-oceano": "linear-gradient(152deg, #17cb8a -2%, #01b0fb 69%)",
        "gradient-pearino":
          "linear-gradient(112deg, #ff9d67 -2%, #ff5f89 102%)",
      },
    },
  },
  plugins: [],
};
export default config;
