import './App.css';
import Background from './pages/Background';
import { ThemeProvider, styled } from 'styled-components';
import { darkTheme, lightTheme } from './style/theme';
import { useState } from 'react';

const Button = styled.button`
  background: ${(props) => {return props.theme.bgColor}}
`
function App() {
  const [theme, setTheme] = useState(true);
  const changeMode = () => {
    setTheme(prev => !prev)
  }

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Background/>
      <Button onClick={changeMode}>버튼</Button>
    </ThemeProvider>
  );
}

export default App;
