import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ClinicsList from "./Clinics/ClinicsList";
import LabsList from "./Labs/LabsList";
import Header from "./Header";
import NewVisit from "./Clinics/NewVisit";
import NewRecord from "./Labs/NewRecord";

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
          <Link to="/labs">Labs</Link>
          <Switch>
            <Route path="/clinics/new" component={NewVisit} />
            <Route path="/labs/new" component={NewRecord} />
            <Route exact path="/clinics" component={ClinicsList} />
            <Route exact path="/labs" component={LabsList} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
