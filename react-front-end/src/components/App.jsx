import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import IconLabelButtons from './Button';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },
  palette: {
    common: {
      black:'#2A2D34'
    },
    primary: {
      light:'#D3F5A3',
      main: '#AED6B5',
    },
    secondary: {
      main: '#6F8695',
    }
  }
});

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
            <a href='#text-buttons'>Link to somewhere</a>
          </div>
          <IconLabelButtons />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;