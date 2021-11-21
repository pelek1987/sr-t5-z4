import { ThemeProvider } from "styled-components";
import { theme } from "./assets/themes";
import { GlobalStyle } from "./assets/styles/GlobalStyles";

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}
