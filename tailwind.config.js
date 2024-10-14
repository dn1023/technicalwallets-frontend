/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#121723",
        dark: "#1D2430",
        primary: "#4A6CF7",
        yellow: "#FBB040",
        "bg-color-dark": "#171C28",
        "body-color": {
          DEFAULT: "#788293",
          dark: "#959CB1",
        },
        stroke: {
          stroke: "#E3E8EF",
          dark: "#353943",
        },
        gray: {
          ...colors.gray,
          dark: "#1E232E",
          light: "#F0F2F9",
        },
      },

      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        two: "0px 5px 10px rgba(6, 8, 15, 0.1)",
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
        "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
        "feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)",
        submit: "0px 5px 20px rgba(4, 10, 34, 0.1)",
        "submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)",
        btn: "0px 1px 2px rgba(4, 10, 34, 0.15)",
        "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)",
        "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.1)",
      },

      dropShadow: {
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
      },

      keyframes: {
        "fade-in": {
            "0%": {
                opacity: 0
            },
            "100%": {
                opacity: 1
            },
        },
        "fade-out": {
            "0%": {
                opacity: 1
            },
            "100%": {
                opacity: 0
            },
        },
        "fade-in-down": {
            "0%": {
                opacity: 0,
                transform: "translate3d(0, -100%, 0)",
            },
            "100%": {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
            },
        },
        "fade-in-top-left": {
            "0%": {
                opacity: 0,
                transform: "translate3d(-100%, -100%, 0)",
            },
            "100%": {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
            },
        },
        "fade-in-top-right": {
            "0%": {
                opacity: 0,
                transform: "translate3d(100%, -100%, 0)",
            },
            "100%": {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
            },
        },

        "fade-in-bottom-left": {
            "0%": {
                opacity: 0,
                transform: "translate3d(100%, 100%, 0)",
            },
            "100%": {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
            },
        },
        "fade-in-bottom-right": {
            "0%": {
                opacity: 0,
                transform: "translate3d(-100%, 100%, 0)",
            },
            "100%": {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
            },
        },
        "fade-in-bounce-right": {
            "0%": {
                opacity: 0,
                transform: "translate3d(100%, 0%, 0)",
            },
            "33%": {
                opacity: 0.5,
                transform: "translate3d(0%, 0%, 0)",
            },
            "66%": {
                opacity: 0.7,
                transform: "translate3d(20%, 0%, 0)",
            },
            "100%": {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
            },
        },
        "fade-in-bounce-left": {
            "0%": {
                opacity: 0,
                transform: "translate3d(-100%, 0%, 0)",
            },
            "33%": {
                opacity: 0.5,
                transform: "translate3d(0%, 0%, 0)",
            },
            "66%": {
                opacity: 0.7,
                transform: "translate3d(-20%, 0%, 0)",
            },
            "100%": {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
            },
        },
        "fade-in-bouncedown": {
            "0%": {
                opacity: 0,
                transform: "translate3d(0%, -100%, 0)",
            },
            "33%": {
                opacity: 0.5,
                transform: "translate3d(0%, 0%, 0)",
            },
            "66%": {
                opacity: 0.7,
                transform: "translate3d(0%, -20%, 0)",
            },
            "100%": {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
            },
        },
        "fade-in-bounceup": {
            "0%": {
                opacity: 0,
                transform: "translate3d(0%, 100%, 0)",
            },
            "33%": {
                opacity: 0.5,
                transform: "translate3d(0%, 0%, 0)",
            },
            "66%": {
                opacity: 0.7,
                transform: "translate3d(0%, 20%, 0)",
            },
            "100%": {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
            },
        },
        "fade-in-left": {
            "0%": {
                opacity: 0,
                transform: "translate3d(-100%, 0, 0)",
            },
            "100%": {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
            },
        },
        "fade-in-right": {
            "0%": {
                opacity: 0,
                transform: "translate3d(100%, 0, 0)",
            },
            "100%": {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
            },
        },
        "fade-in-up": {
            "0%": {
                opacity: 0,
                transform: "translate3d(0, 100%, 0)",
            },
            "100%": {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
            },
        },
        "fade-out-down": {
            "0%": {
                opacity: 1,
            },
            "100%": {
                opacity: 0,
                transform: "translate3d(0, 100%, 0)",
            },
        },
        "fade-out-left": {
            "0%": {
                opacity: 1,
            },
            "100%": {
                opacity: 0,
                transform: "translate3d(-100%, 0, 0)",
            },
        },
        "fade-out-top-left": {
            "0%": {
                opacity: 1,
            },
            "100%": {
                opacity: 0,
                transform: "translate3d(-100%, -100%, 0)",
            },
        },
        "fade-out-top-right": {
            "0%": {
                opacity: 1,
            },
            "100%": {
                opacity: 0,
                transform: "translate3d( 100%, -100%, 0)",
            },
        },
        "fade-out-right": {
            "0%": {
                opacity: 1,
            },
            "100%": {
                opacity: 0,
                transform: "translate3d(100%, 0, 0)",
            },
        },
        "fade-out-up": {
            "0%": {
                opacity: 1,
            },
            "100%": {
                opacity: 0,
                transform: "translate3d(0, -100%, 0)",
            },
        },
        "slide-in-down": {
            "0%": {
                visibility: "visible",
                transform: "translate3d(0, -100%, 0)",
            },
            "100%": {
                transform: "translate3d(0, 0, 0)",
            },
        },
        "slide-in-left": {
            "0%": {
                visibility: "visible",
                transform: "translate3d(-100%, 0, 0)",
            },
            "100%": {
                transform: "translate3d(0, 0, 0)",
            },
        },
        "slide-in-right": {
            "0%": {
                visibility: "visible",
                transform: "translate3d(100%, 0, 0)",
            },
            "100%": {
                transform: "translate3d(0, 0, 0)",
            },
        },
        "slide-in-up": {
            "0%": {
                visibility: "visible",
                transform: "translate3d(0, 100%, 0)",
            },
            "100%": {
                transform: "translate3d(0, 0, 0)",
            },
        },
        "slide-out-down": {
            "0%": {
                transform: "translate3d(0, 0, 0)",
            },
            "100%": {
                visibility: "hidden",
                transform: "translate3d(0, 100%, 0)",
            },
        },
        "slide-out-left": {
            "0%": {
                transform: "translate3d(0, 0, 0)",
            },
            "100%": {
                visibility: "hidden",
                transform: "translate3d(-100%, 0, 0)",
            },
        },
        "slide-out-right": {
            "0%": {
                transform: "translate3d(0, 0, 0)",
            },
            "100%": {
                visibility: "hidden",
                transform: "translate3d(100%, 0, 0)",
            },
        },
        "slide-out-up": {
            "0%": {
                transform: "translate3d(0, 0, 0)",
            },
            "100%": {
                visibility: "hidden",
                transform: "translate3d(0, -100%, 0)",
            },
        },
        "slide-down": {
            "0%": {
                transform: "translate3d(0, 0, 0)",
            },
            "100%": {
                transform: "translate3d(0, 100%, 0)",
            },
        },
        "slide-left": {
            "0%": {
                transform: "translate3d(0, 0, 0)",
            },
            "100%": {
                transform: "translate3d(-100%, 0, 0)",
            },
        },
        "slide-right": {
            "0%": {
                transform: "translate3d(0, 0, 0)",
            },
            "100%": {
                transform: "translate3d(100%, 0, 0)",
            },
        },
        "slide-up": {
            "0%": {
                transform: "translate3d(0, 0, 0)",
            },
            "100%": {
                transform: "translate3d(0, -100%, 0)",
            },
        },
        tada: {
            "0%": {
                transform: "scale3d(1, 1, 1)",
            },
            "10%, 20%": {
                transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
            },
            "30%, 50%, 70%, 90%": {
                transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
            },
            "40%, 60%, 80%": {
                transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
            },
            "100%": {
                transform: "scale3d(1, 1, 1)",
            },
        },
        "spinner-grow": {
            "0%": {
                transform: "scale(0)",
            },

            "100%": {
                transform: "none",
                opacity: "1",
            },
        },
        "placeholder-wave": {
            "100%": {
                maskPosition: "-200% 0%"
            },
        },
        "show-up-clock": {
            "0%": {
                opacity: "0",
                transform: "scale(0.7)",
            },
            "100%": {
                opacity: "1",
                transform: "scale(1)",
            },
        },
        "drop-in": {
            "0%": {
                opacity: "0",
                transform: "scale(0)",
                animationTimingFunction: "cubic-bezier(0.34, 1.61, 0.7, 1)",
            },
            "100%": {
                opacity: "1",
                transform: "scale(1)",
            },
        },
        "drop-out": {
            "0%": {
                opacity: "1",
                transform: "scale(1)",
                animationTimingFunction: "cubic-bezier(0.34, 1.61, 0.7, 1)",
            },
            "100%": {
                opacity: "0",
                transform: "scale(0)"
            },
        },
        "fly-in": {
            "0%": {
                opacity: "0",
                transform: "scale3d(0.3, 0.3, 0.3)",
                transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            },
            "20%": {
                transform: "scale3d(1.1, 1.1, 1.1)"
            },
            "40%": {
                transform: "scale3d(0.9, 0.9, 0.9)"
            },
            "60%": {
                opacity: "1",
                transform: "scale3d(1.03, 1.03, 1.03)"
            },
            "80%": {
                transform: "scale3d(0.97, 0.97, 0.97)"
            },
            "100%": {
                opacity: "1",
                transform: "scale3d(1, 1, 1)"
            },
        },
        "fly-in-up": {
            "0%": {
                opacity: "0",
                transform: "translate3d(0, 1500px, 0)",
                transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            },
            "60%": {
                opacity: "1",
                transform: "translate3d(0, -20px, 0)"
            },
            "75%": {
                transform: "translate3d(0, 10px, 0)"
            },
            "90%": {
                transform: "translate3d(0, -5px, 0)"
            },
            "100%": {
                transform: "translate3d(0, 0, 0)"
            },
        },
        "fly-in-down": {
            "0%": {
                opacity: "0",
                transform: "translate3d(0, -1500px, 0)",
                transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            },
            "60%": {
                opacity: "1",
                transform: "translate3d(0, 25px, 0)"
            },
            "75%": {
                transform: "translate3d(0, -10px, 0)"
            },
            "90%": {
                transform: "translate3d(0, 5px, 0)"
            },
            "100%": {
                transform: "none"
            },
        },
        "fly-in-left": {
            "0%": {
                opacity: "0",
                transform: "translate3d(1500px, 0, 0)",
                transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            },
            "60%": {
                opacity: "1",
                transform: "translate3d(-25px, 0, 0)"
            },
            "75%": {
                transform: "translate3d(10px, 0, 0)"
            },
            "90%": {
                transform: "translate3d(-5px, 0, 0)"
            },
            "100%": {
                transform: "none"
            },
        },
        "fly-in-right": {
            "0%": {
                opacity: "0",
                transform: "translate3d(-1500px, 0, 0)",
                transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            },
            "60%": {
                opacity: "1",
                transform: "translate3d(25px, 0, 0)"
            },
            "75%": {
                transform: "translate3d(-10px, 0, 0)"
            },
            "90%": {
                transform: "translate3d(5px, 0, 0)"
            },
            "100%": {
                transform: "none"
            },
        },
        "fly-out": {
            "0%": {
                transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            },
            "20%": {
                transform: "scale3d(0.9, 0.9, 0.9)",
            },
            "50%, 55%": {
                opacity: "1",
                transform: "scale3d(1.1, 1.1, 1.1)",
            },
            "100%": {
                opacity: "0",
                transform: "scale3d(0.3, 0.3, 0.3)",
            },
        },
        "fly-out-up": {
            "0%": {
                transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            },
            "20%": {
                transform: "translate3d(0, 10px, 0)",
            },
            "40%, 45%": {
                opacity: "1",
                transform: "translate3d(0, -20px, 0)",
            },
            "100%": {
                opacity: "0",
                transform: "translate3d(0, 2000px, 0)",
            },
        },
        "fly-out-down": {
            "0%": {
                transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            },
            "20%": {
                transform: "translate3d(0, -10px, 0)",
            },
            "40%, 45%": {
                opacity: "1",
                transform: "translate3d(0, 20px, 0)",
            },
            "100%": {
                opacity: "0",
                transform: "translate3d(0, -2000px, 0)",
            },
        },
        "fly-out-left": {
            "0%": {
                transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            },
            "20%": {
                opacity: "1",
                transform: "translate3d(-20px, 0, 0)",
            },
            "100%": {
                opacity: "0",
                transform: "translate3d(2000px, 0, 0)",
            },
        },
        "fly-out-right": {
            "0%": {
                transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            },
            "20%": {
                opacity: "1",
                transform: "translate3d(20px, 0, 0)",
            },
            "100%": {
                opacity: "0",
                transform: "translate3d(-2000px, 0, 0)",
            },
        },
        "browse-in": {
            "0%": {
                transform: "scale(0.8) translateZ(0px)",
                zIndex: "-1"
            },
            "10%": {
                transform: "scale(0.8) translateZ(0px)",
                zIndex: "-1",
                opacity: "0.7",
            },
            "80%": {
                transform: "scale(1.05) translateZ(0px)",
                zIndex: "999",
                opacity: "1",
            },
            "100%": {
                transform: "scale(1) translateZ(0px)",
                zIndex: "999"
            },
        },
        "browse-out": {
            "0%": {
                transform: "translateX(0%) rotateY(0deg) rotateX(0deg)",
                zIndex: "999",
            },
            "50%": {
                transform: "translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",
                zIndex: "-1",
            },
            "80%": {
                opacity: "1"
            },
            "100%": {
                zIndex: "-1",
                opacity: "0",
                transform: "translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)",
            },
        },
        "browse-out-left": {
            "0%": {
                transform: "translateX(0%) rotateY(0deg) rotateX(0deg)",
                zIndex: "999",
            },
            "50%": {
                transform: "translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",
                zIndex: "-1",
            },
            "80%": {
                opacity: "1"
            },
            "100%": {
                zIndex: "-1",
                opacity: "0",
                transform: "translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)",
            },
        },
        "browse-out-right": {
            "0%": {
                transform: "translateX(0%) rotateY(0deg) rotateX(0deg)",
                zIndex: "999",
            },
            "50%": {
                transform: "translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",
                zIndex: "1",
            },
            "80%": {
                opacity: "1"
            },
            "100%": {
                zIndex: "1",
                opacity: "0",
                transform: "translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)",
            },
        },
        jiggle: {
            "0%": {
                transform: "scale3d(1, 1, 1)"
            },
            "30%": {
                transform: "scale3d(1.25, 0.75, 1)"
            },
            "40%": {
                transform: "scale3d(0.75, 1.25, 1)"
            },
            "50%": {
                transform: "scale3d(1.15, 0.85, 1)"
            },
            "65%": {
                transform: "scale3d(0.95, 1.05, 1)"
            },
            "75%": {
                transform: "scale3d(1.05, 0.95, 1)"
            },
            "100%": {
                transform: "scale3d(1, 1, 1)"
            },
        },
        flash: {
            "0%, 50%, 100%": {
                opacity: "1"
            },
            "25%, 75%": {
                opacity: "0"
            },
        },
        shake: {
            "0%, 100%": {
                transform: "translateX(0)",
            },
            "10%, 30%, 50%, 70%, 90%": {
                transform: "translateX(-10px)",
            },
            "20%, 40%, 60%, 80%": {
                transform: "translateX(10px)",
            },
        },
        glow: {
            "0%": {
                backgroundColor: "#fcfcfd"
            },
            "30%": {
                backgroundColor: "#fff6cd"
            },
            "100%": {
                backgroundColor: "#fcfcfd"
            },
        },

        wiggle: {
          "5%": {
            transform: "rotate(-5deg)"
          },
          "20%": {
            transform: "rotate(5deg)"
          },
          "40%": {
            transform: "rotate(-5deg)"
          },
          "80%": {
            transform: "rotate(5deg)"
          }
        },
        flip: {
        
          "0%" :{
            transform: "rotateY(-180deg)"
          },
          "50%": {
            transform: "rotateY(-90deg)"
          },
          "100%" :{
            transform: "rotateY(0deg)"
          },
        },
        "flip-up": {
          "0%": {
            transform: "translate3d(0, 100%, 0) rotateY(-180deg)",
          },
          "50%": {
            transform: "rotateY(-90deg)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateY(0deg)",
          },
        },
        "flip-down": {
          "0%": {
            transform: "translate3d(0, -100%, 0) rotateY(-180deg)",
          },
          "50%": {
            transform: "rotateY(-90deg)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateY(0deg)",
          },
        },
        "flip-left": {
          "0%": {
            transform: "translate3d(-100%, 0%, 0) rotateY(-180deg)",
          },
          "50%": {
            transform: "rotateY(-90deg) ",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateY(0deg)",
          },
        },
        "flip-right": {
          "0%": {
            transform: "translate3d(100%, 0%, 0) rotateY(-180deg)",
          },
          "50%": {
            transform: "rotateY(-90deg) ",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateY(0deg)",
          },
        },
        "flip-top-left": {
          "0%": {
            transform: "translate3d(-100%, -100%, 0) rotateY(-180deg)",
          },
          "50%": {
            transform: "rotateY(-90deg) ",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateY(0deg)",
          },
        },
        "flip-top-right": {
          "0%": {
            transform: "translate3d(100%, -100%, 0)  rotateY(-180deg)",
          },
          "50%": {
            transform: "rotateY(-90deg) ",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateY(0deg)",
          },
        },

        "flip-bottom-left": {
          "0%": {
            transform: "translate3d(-100%, 100%, 0) rotateY(-180deg)",
          },
          "50%": {
            transform: "rotateY(-90deg) ",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateY(0deg)",
          },
        },
        "flip-bottom-right": {
          "0%": {
            transform: "translate3d(100%, 100%, 0)  rotateY(-180deg)",
          },
          "50%": {
            transform: "rotateY(-90deg) ",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateY(0deg)",
          },
        },
        flipy: {
          "0%" :{
            transform: "rotateX(-180deg)"
          },
          "50%": {
            transform: "rotateX(-90deg)",
          },
          "100%" :{
            transform: "rotateX(0deg)"
          },
        },
        "flipy-up": {
          "0%": {
            transform: "translate3d(0, 100%, 0) rotateX(-180deg)",
          },
          "50%": {
            transform: "rotateX(-90deg)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateX(0deg)",
          },
        },
        "flipy-down": {
          "0%": {
            transform: "translate3d(0, -100%, 0) rotateX(-180deg)",
          },
          "50%": {
            transform: "rotateX(-90deg)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateX(0deg)",
          },
        },
        "flipy-left": {
          "0%": {
            transform: "translate3d(-100%, 0%, 0) rotateX(-180deg)",
          },
          "50%": {
            transform: "rotateX(-90deg) ",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateX(0deg)",
          },
        },
        "flipy-right": {
          "0%": {
            transform: "translate3d(100%, 0%, 0) rotateX(-180deg)",
          },
          "50%": {
            transform: "rotateX(-90deg) ",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateX(0deg)",
          },
        },
        "flipy-top-left": {
          "0%": {
            transform: "translate3d(-100%, -100%, 0) rotateX(-180deg)",
          },
          "50%": {
            transform: "rotateX(-90deg) ",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateX(0deg)",
          },
        },
        "flipy-top-right": {
          "0%": {
            transform: "translate3d(100%, -100%, 0)  rotateX(-180deg)",
          },
          "50%": {
            transform: "rotateX(-90deg) ",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateX(0deg)",
          },
        },
        "flipy-bottom-left": {
          "0%": {
            transform: "translate3d(-100%, 100%, 0) rotateX(-180deg)",
          },
          "50%": {
            transform: "rotateX(-90deg) ",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateX(0deg)",
          },
        },
        "flipy-bottom-right": {
          "0%": {
            transform: "translate3d(100%, 100%, 0)  rotateX(-180deg)",
          },
          "50%": {
            transform: "rotateX(-90deg) ",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateX(0deg)",
          },
        },
        "zoom-in": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
          },
        },
        "zoom-in-up": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(0, 100%, 0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)"
          },
        },
        "zoom-in-down": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(0, -100%, 0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)"
          },
        },
        "zoom-in-right": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(-100%, 0, 0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)"
          },
        },
        "zoom-in-left": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(100%, 0, 0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)"
          },
        },
        "zoom-in-bottom-right": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(100%, 100%, 0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)"
          },
        },
        "zoom-in-top-right": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(100%, -100%, 0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)"
          },
        },
        "zoom-in-top-left": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(-100%, -100%, 0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)"
          },
        },
        "zoom-in-bottom-left": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(-100%, 100%, 0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)"
          },
        },
        "zoom-out": {
          "0%": {
            opacity: 1,
          },
          "15%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
        },
        "zoom-out-down": {
          "0%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
          "15%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(0, 100%, 0)",
          },
        },
        "zoom-out-up": {
          "0%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
          "15%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(0, -100%, 0)",
          },
        },
        "zoom-out-left": {
          "0%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
          "15%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(-100%, 0%, 0)",
          },
        },
        "zoom-out-right": {
          "0%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
          "15%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(100%, 0%, 0)",
          },
        },  
    },
    animation: {
      fadeIn: 'fade-in 1s ease-in-out 0.25s 1',
      fadeOut: 'fade-out 1s ease-out 0.25s 1',
      fadeInDown: 'fade-in-down 1s ease-in 0.25s 1',
      fadeInTopLeft: 'fade-in-top-left 1s ease-out 0.25s 1',
      fadeInTopRight: 'fade-in-top-right 1s ease-out 0.25s 1',
      fadeInBottomLeft: 'fade-in-bottom-left 1s ease-out 0.25s 1',
      fadeInBottomRight: 'fade-in-bottom-right 1s ease-out 0.25s 1',
      fadeInLeft: 'fade-in-left 1s ease-in-out 0.25s 1',
      fadeInBounceDown: 'fade-in-bouncedown 1s ease-in-out 0.25s 1',
      fadeInBounceUp: 'fade-in-bounceup 1s ease-in-out 0.25s 1',
      fadeInBounceRight: 'fade-in-bounce-right 1s ease-in-out 0.25s 1',
      fadeInBounceLeft: 'fade-in-bounce-left 1s ease-in-out 0.25s 1',
      fadeInright: 'fade-in-right 1s ease-in-out 0.25s 1',
      fadeInUp: 'fade-in-up 1s ease-in-out 0.25s 1',
      fadeOutDown: 'fade-out-down 1s ease-in-out 0.25s 1',
      fadeOutTopLeft: 'fade-out-top-left 1s ease-in-out 0.25s 1',
      fadeOutTopRight: 'fade-out-top-right 1s ease-in-out 0.25s 1',
      fadeOutLeft: 'fade-out-left 1s ease-in-out 0.25s 1',
      fadeOutRight: 'fade-out-right 1s ease-in-out 0.25s 1',
      fadeOutUp: 'fade-out-up 1s ease-in-out 0.25s 1',
      slideInDown: 'slide-in-down 1s ease-in-out 0.25s 1',
      slideInLeft: 'slide-in-left 1s ease-in-out 0.25s 1',
      slideInRight: 'slide-in-right 1s ease-in-out 0.25s 1',
      slideInUp: 'slide-in-up 1s ease-in-out 0.25s 1',
      slideOutDown: 'slide-out-down 1s ease-in-out 0.25s 1',
      slideOutLeft: 'slide-out-left 1s ease-in-out 0.25s 1',
      slideOutRight: 'slide-out-right 1s ease-in-out 0.25s 1',
      slideOutUp: 'slide-out-up 1s ease-in-out 0.25s 1',
      slideDown: 'slide-down 1s ease-in-out 0.25s 1',
      slideDeft: 'slide-left 1s ease-in-out 0.25s 1',
      slideRight: 'slide-right 1s ease-in-out 0.25s 1',
      slideUp: 'slide-up 1s ease-in-out 0.25s 1',
      zoomIn: 'zoom-in 1s ease-in-out 0.25s 1',
      zoomOut: 'zoom-out 1s ease-in-out 0.25s 1',
      tada: 'tada 1s ease-in-out 0.25s 1',
      spinnerGrow: 'spinner-grow 1s ease-in-out 0.25s 1',
      placeholderWave: 'placeholder-wave 1s ease-in-out 0.25s 1',
      showUpClock: 'show-up-clock 1s ease-in-out 0.25s 1',
      dropIn: 'drop-in 0.5s ease-in-out 0.25s 1',
      dropOut: 'drop-out 0.5s ease-in-out 0.25s 1',
      flyIn: 'fly-in 0.6s ease-in-out 0.25s 1',
      flyInUp: 'fly-in-up 0.6s ease-in-out 0.25s 1',
      flyInDown: 'fly-in-down 0.6s ease-in-out 0.25s 1',
      flyInLeft: 'fly-in-left 0.6s ease-in-out 0.25s 1',
      flyInRight: 'fly-in-right 0.6s ease-in-out 0.25s 1',
      flyOut: 'fly-out 0.6s ease-in-out 0.25s 1',
      flyOutUp: 'fly-out-up 0.6s ease-in-out 0.25s 1',
      flyOutDown: 'fly-out-down 0.6s ease-in-out 0.25s 1',
      flyOutLeft: 'fly-out-left 0.6s ease-in-out 0.25s 1',
      flyOutRight: 'fly-out-right 0.6s ease-in-out 0.25s 1',
      browseIn: 'browse-in 0.4s ease-in-out 0.25s 1',
      browseOut: 'browse-out 0.4s ease-in-out 0.25s 1',
      browseOutLeft: 'browse-out-left 0.4s ease-in-out 0.25s 1',
      browseOutRight: 'browse-out-right 0.4s ease-in-out 0.25s 1',
      jiggle: 'jiggle 0.6s ease-in-out 0.25s 1',
      flash: 'flash 0.6s ease-in-out 0.25s 1',
      shake: 'shake 0.6s ease-in-out 0.25s 1',
      glow: 'glow 0.6s ease-in-out 0.25s 1',
      zoomIn: 'zoom-in 1s ease-out 0.25s 1',
      zoomOut: 'zoom-out 1s ease-out 0.25s 1',
      zoomOutLeft: 'zoom-out-left 1s ease-out 0.25s 1',
      zoomOutRight: 'zoom-out-right 1s ease-out 0.25s 1',
      zoomOutUp: 'zoom-out-up 1s ease-out 0.25s 1',
      zoomOutDown: 'zoom-out-down 1s ease-out 0.25s 1',
      zoomInUp: 'zoom-in-up 1s ease-out 0.25s 1',
      zoomInBotoomRight: 'zoom-in-bottom-right 1s ease-out 0.25s 1',
      zoomInBotoomLeft: 'zoom-in-bottom-left 1s ease-out 0.25s 1',
      zoomInTopRight: 'zoom-in-top-right 1s ease-out 0.25s 1',
      zoomInTopLeft: 'zoom-in-top-left 1s ease-out 0.25s 1',
      zoomInDown: 'zoom-in-down 1s ease-out 0.25s 1',
      zoomInRight: 'zoom-in-right 1s ease-out 0.25s 1',
      zoomInLeft: 'zoom-in-left 1s ease-out 0.25s 1',
      flipx : 'flipx 2s 0.25s 1',
      flipxRight: 'flipx-right 1s ease 0.25s 1',
      flipxLeft: 'flipx-left 1s ease 0.25s 1',
      flipxTopLeft: 'flipx-top-left 1s ease 0.25s 1',
      flipxTopRight: 'flipx-top-right 1s ease 0.25s 1',
      flipxBottomLeft: 'flipx-bottom-left 1s ease 0.25s 1',
      flipxBottomRight: 'flipx-bottom-right 1s ease 0.25s 1',
      flipxUp:'flipx-up 1s ease 0.25s 1',
      flipxDown:'flipx-down 1s ease 0.25s 1',
      flipRight: 'flip-right 1s ease 0.25s 1',
      flipLeft: 'flip-left 1s ease 0.25s 1',
      flipTopLeft: 'flip-top-left 1s ease 0.25s 1',
      flipTopRight: 'flip-top-right 1s ease 0.25s 1',
      flipBottomLeft: 'flip-bottom-left 1s ease 0.25s 1',
      flipBottomRight: 'flip-bottom-right 1s ease 0.25s 1',
      flipUp:'flip-up 1s ease 0.25s 1',
      flipDown:'flip-down 1s ease 0.25s 1',
      flip : 'flip 2s 0.25s 1',
      wiggle: 'wiggle 0.8s ease 0.25s 2',
    },
  },
},
  plugins: [],

};
