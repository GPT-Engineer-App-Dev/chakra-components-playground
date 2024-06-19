import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#0a0a0a", // Black
    800: "#333333", // Dark Gray
    700: "#4f4f4f", // Medium Gray
    600: "#666666", // Gray
    500: "#808080", // Light Gray
    400: "#999999", // Lighter Gray
    300: "#b3b3b3", // Lightest Gray
    200: "#cccccc", // Very Light Gray
    100: "#e6e6e6", // Near White
    50: "#f5f5f5", // Off White
  },
  text: {
    primary: "#0a0a0a", // Black
    secondary: "#4f4f4f", // Medium Gray
    disabled: "#b3b3b3", // Lightest Gray
  },
  background: {
    default: "#ffffff", // White
    paper: "#f5f5f5", // Off White
  },
};

const theme = extendTheme({
  colors,
  styles: {
    global: {
      "html, body": {
        color: "text.primary",
        background: "background.default",
      },
      a: {
        color: "brand.700",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
