import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    primary: "#F2F2F2",
    white: "#FFFFFF",
    semiWhite: "#F2F2F2",
    black: "#303030",
    semiBlack: "#333333",
    fadedWhite: "rgba(255, 255, 255, 0.6)",
    secondary: "#FFE500",
    accent: "#BEDBE4",
  },
};

export const theme = extendTheme({ colors });
