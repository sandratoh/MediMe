// Libraries
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// App Components
import Dashboard from "./Dashboard";
import Header from "./Header";
import Menu from "./Menu";

// Clinic Components
import ClinicDetail from "./Clinics/ClinicDetail";
import ClinicsList from "./Clinics/ClinicsList";
import EditVisit from "./Clinics/EditVisit";
import NewVisit from "./Clinics/NewVisit";

// Lab Components
import EditRecord from "./Labs/EditRecord";
import LabDetail from "./Labs/LabDetail";
import LabsList from "./Labs/LabsList";
import NewRecord from "./Labs/NewRecord";

// Medication Components
import EditMedication from "./Medications/EditMedication";
import MedicationDetail from "./Medications/MedicationDetail";
import MedicationsList from "./Medications/MedicationsList";
import NewMedication from "./Medications/NewMedication";

// User Components
import EditUser from "./Users/EditUser";
import Login from "./Users/Login";
import Signup from "./Users/Signup";
import SignupSuccess from "./Users/SignupSuccess";

// Vaccination & Dose Components
import DoseDetail from "./Vaccinations/Doses/DoseDetail";
import EditDose from "./Vaccinations/Doses/EditDose";
import NewDose from "./Vaccinations/Doses/NewDose";
import NewVaccine from "./Vaccinations/NewVaccine";
import VaccinationsList from "./Vaccinations/VaccinationsList";
import VaccinationSuccess from "./Vaccinations/VaccinationSuccess";

// Helpers
import ScrollToTop from "../helpers/ScrollToTop";

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
      main: "#AACFD0",
      contrastText: "#fff",
    },
    secondary: {
      main: "#6F8695",
    },
    error: {
      main: "#FF6464",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <>
            <ScrollToTop />
              <Header />
              <Switch>
                <Route exact path="/clinics/edit" component={EditVisit} />
                <Route exact path="/clinics/new" component={NewVisit} />
                <Route exact path="/clinics/view" component={ClinicDetail} />
                <Route exact path="/clinics" component={ClinicsList} />

                <Route exact path="/labs/edit" component={EditRecord} />
                <Route exact path="/labs/new" component={NewRecord} />
                <Route exact path="/labs/view" component={LabDetail} />
                <Route exact path="/labs" component={LabsList} />

                <Route exact path="/medications/edit" component={EditMedication} />
                <Route exact path="/medications/new" component={NewMedication} />
                <Route
                  exact
                  path="/medications/view"
                  component={MedicationDetail}
                />
                <Route exact path="/medications" component={MedicationsList} />

                <Route exact path="/vaccinations/new" component={NewVaccine} />
                <Route exact path="/vaccinations/dose/new" component={NewDose} />
                <Route exact path="/vaccinations/dose/edit" component={EditDose} />
                <Route
                  exact
                  path="/vaccinations/dose/view"
                  component={DoseDetail}
                />

                <Route exact path="/vaccinations" component={VaccinationsList} />
                <Route
                  exact
                  path="/vaccinations/success"
                  component={VaccinationSuccess}
                />

                <Route exact path="/signup" component={Signup} />
                <Route exact path="/signup/success" component={SignupSuccess} />

                <Route exact path="/login" component={Login} />

                <Route exact path="/edit" component={EditUser} />

                <Route exact path="/menu" component={Menu} />
                <Route exact path="/" component={Dashboard} />
              </Switch>
          </>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
