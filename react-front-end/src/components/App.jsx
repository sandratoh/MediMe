import Button from '@material-ui/core/Button';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <h1>h1: This is App.jsx</h1>
          <h2>h2: This is App.jsx</h2>
          <h3>h3: This is App.jsx</h3>
          <h4>h4: This is App.jsx</h4>
          <p>p: This is App.jsx</p>
          <div>
            <a href='#'>Link to somewhere</a>
          </div>
          <Button variant="contained" color="primary">Hello World</Button>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;