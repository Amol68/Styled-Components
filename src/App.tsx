import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import { ButtonStyle,ButtonLabel } from "./components/styles/Button.style";
import { GlobalStyles } from "./components/styles/Global.style";

const theme = {
  colors: {
    header: "rgb(239, 239, 239)",
    footer: "rgb(239, 239, 239)",
    body: "green",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles/>
        <Header />

        <ButtonStyle backgroundColor="gray"><ButtonLabel>Click Me</ButtonLabel></ButtonStyle>

        <ButtonStyle backgroundColor="pink">Propped Button</ButtonStyle>

        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
