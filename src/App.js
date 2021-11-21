import { ThemeProvider } from "styled-components";
import { theme } from "./assets/themes";
import { GlobalStyle } from "./assets/styles/GlobalStyles";
import UsersContainer from "./components/UsersContainer";

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <UsersContainer />
      </ThemeProvider>
    </div>
  );
}
