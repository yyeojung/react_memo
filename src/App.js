import './App.css';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './style/theme';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // page
import Background from './pages/Background';
import List from './pages/List';
import Detail from './pages/Detail';


function App() {
  const [theme, setTheme] = useState(true);

  const lightMode = () => {
    setTheme(true);
  }
  const darkMode = () => {
    setTheme(false);
  }
  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
            <Background/>
            <Router basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<List lightMode={lightMode} darkMode={darkMode}/>}></Route>
                    <Route path="/memo" element={<Detail lightMode={lightMode} darkMode={darkMode}/>}></Route>
                    <Route path="/memo/:memoId" element={<Detail lightMode={lightMode} darkMode={darkMode} />} />
                </Routes>
            </Router>
    </ThemeProvider>
  );
}

export default App;
