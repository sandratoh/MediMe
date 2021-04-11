import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ClinicsList from "./Clinics/ClinicsList";
import Header from "./Header";
import NewVisit from "./Clinics/NewVisit";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  palette: {
    common: {
      black: "#2A2D34",
    },
    primary: {
      light: "#D3F5A3",
      main: "#AED6B5",
    },
    secondary: {
      main: "#6F8695",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header />
          <Link to="/clinics">Clinics</Link>
          <Switch>
            <Route path="/clinics/new" component={NewVisit} />
            <Route exact path="/clinics" component={ClinicsList} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
