// Libraries import
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components import
import Header from "./Header";
import Dashboard from "./Dashboard";

// Clinic Components
import ClinicDetail from "./Clinics/ClinicDetail";
import ClinicsList from "./Clinics/ClinicsList";
import EditVisit from "./Clinics/EditVisit";
import NewVisit from "./Clinics/NewVisit";

// Lab Components
import LabDetail from "./Labs/LabDetail";
import LabsList from "./Labs/LabsList";
import EditRecord from "./Labs/EditRecord";
import NewRecord from "./Labs/NewRecord";

// Medication Components
import MedicationDetail from "./Medications/MedicationDetail";
import MedicationsList from "./Medications/MedicationsList";
import EditMedication from "./Medications/EditMedication";
import NewMedication from "./Medications/NewMedication";

// Vaccination & Dose Components
import DoseDetail from "./Vaccinations/Doses/DoseDetail";
import DoseEdit from "./Vaccinations/Doses/EditDose";
import DoseNew from "./Vaccinations/Doses/NewDose";
import VaccineNew from "./Vaccinations/NewVaccine";
import VaccinationsList from "./Vaccinations/VaccinationsList";
import Success from "./Vaccinations/Success";

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
      contrastText: "#fff"
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
          <Header />
          <Switch>
            <Route path="/clinics/edit" component={EditVisit} />
            <Route path="/clinics/new" component={NewVisit} />
            <Route path="/clinics/view" component={ClinicDetail} />
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

            <Route exact path="/vaccinations/new" component={VaccineNew} />
            <Route exact path="/vaccinations/dose/new" component={DoseNew} />
            <Route exact path="/vaccinations/dose/edit" component={DoseEdit} />
            <Route
              exact
              path="/vaccinations/dose/view"
              component={DoseDetail}
            />

            <Route exact path="/vaccinations" component={VaccinationsList} />
            <Route exact path="/vaccinations/success" component={Success} />

            <Route exact path="/" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
