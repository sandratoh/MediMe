import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useContext } from "react";
import { dataContext } from "./hooks/DataProvider";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ClinicsList from "./Clinics/ClinicsList";
import LabsList from "./Labs/LabsList";
import LabDetail from "./Labs/LabDetail";
import Header from "./Header";
import NewVisit from "./Clinics/NewVisit";
import EditVisit from "./Clinics/EditVisit";
import NewRecord from "./Labs/NewRecord";
import ClinicDetail from "./Clinics/ClinicDetail";
import DashboardCard from "./DashboardCard";


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
  // const { data } = useContext(dataContext);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header />
          <DashboardCard category="clinics">
            <Link to="/clinics">Clinics</Link>
          </DashboardCard>
          <DashboardCard category="labs">
            <Link to="/labs">Labs</Link>
          </DashboardCard>
          <DashboardCard category="medications">
            <Link to="/labs">Medications</Link>
          </DashboardCard>
          <DashboardCard category="vaccinations">
            <Link to="/labs">Vaccinations</Link>
          </DashboardCard>
          <Switch>
            <Route path="/clinics/edit" component={EditVisit} />
            <Route path="/clinics/new" component={NewVisit} />
            <Route path="/clinics/view" component={ClinicDetail} />

            <Route exact path="/clinics" component={ClinicsList} />

            <Route path="/labs/new" component={NewRecord} />
            <Route path="/labs/view" component={LabDetail} />

            <Route exact path="/labs" component={LabsList} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
