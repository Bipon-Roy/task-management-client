/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#7b2cbf",
                mainBg: "#EEF5F9",
            },
        },
    },
    plugins: [require("daisyui")],
};
