// Libraries import
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components import
import ClinicsList from "./Clinics/ClinicsList";
import LabsList from "./Labs/LabsList";
import LabDetail from "./Labs/LabDetail";
import Header from "./Header";
import NewVisit from "./Clinics/NewVisit";
import EditVisit from "./Clinics/EditVisit";
import NewRecord from "./Labs/NewRecord";
import EditRecord from "./Labs/EditRecord";
import ClinicDetail from "./Clinics/ClinicDetail";
import Dashboard from "./Dashboard";
import DoseDetail from "./Vaccinations/Doses/DoseDetail";
import Sucess from "./Vaccinations/Success";


// Stylesheet import
import "./App.scss";


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
          <Switch>
            
            <Route path="/clinics/edit" component={EditVisit} />
            <Route path="/clinics/new" component={NewVisit} />
            <Route path="/clinics/:id" component={ClinicDetail} />

            <Route exact path="/clinics" component={ClinicsList} />

            <Route exact path="/labs/edit" component={EditRecord} />
            <Route exact path="/labs/new" component={NewRecord} />
            <Route exact path="/labs/view" component={LabDetail} />
            <Route exact path="/labs" component={LabsList} />

            <Route exact path="/dose" component={DoseDetail} />

            <Route exact path="/vaccinations/success" component={Sucess} />

            <Route exact path="/" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
