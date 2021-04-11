import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ClinicsList from './ClinicsList';
import Header from './Header';

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
        <Router>
          <Header />
            <Link to="/clinics">Clinics</Link>
            <Route path="/clinics" component={ClinicsList}/>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;