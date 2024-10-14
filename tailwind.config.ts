import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        ecg: {
          "0%, 20%": { transform: "translateX(0)" },
          "30%": { transform: "translateX(10px) scaleY(0.8)" }, // before peak
          "40%": { transform: "translateX(30px) scaleY(3)" }, // sharp peak
          "50%": { transform: "translateX(50px) scaleY(0.5)" }, // drop after peak
          "60%": { transform: "translateX(70px) scaleY(1)" }, // return to baseline
          "80%, 100%": { transform: "translateX(100%) scaleY(1)" }, // move line
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.2)" },
          "50%": { transform: "scale(0.9)" },
          "75%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "ecg-wave": "ecg 2s linear infinite",
        "heart-beat": "heartbeat 1.5s ease-in-out infinite", // heart beats every 1.5 seconds
      },
    },
  },
  plugins: [],
};
export default config;
