import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 200;
    margin: 100;
  }
`

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`

const Card = styled.div`
  background-color: red;
`

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor};
`

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Form />
        </Container>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

const Form = () => (<Card><Button>Hello</Button></Card>)


export default App;
