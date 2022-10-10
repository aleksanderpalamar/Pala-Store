import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray1: "#121214",
      gray2: "#202024",
      gray3: "#c4c4cc",
      gray4: "#e1e1e6",

      white: "#fff",

      purple: "#8257e6",
      purpleLight: "#9164fa",

      green: "#00875f",
    },
    lineHeights: {
      lineH: "160%",
    },
    fonts: {
      body: "Roboto, sans-serif",
    },
    fontSizes: {
      sm: "0.875rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
    fontWeights: {
      1: 400,
      2: 700,
    },
  },
  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
  },  
});
