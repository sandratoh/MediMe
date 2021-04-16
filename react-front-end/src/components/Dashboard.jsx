// Libraries
import { Link } from "react-router-dom";

// Components
import DashboardCard from "./DashboardCard";
import SummaryCard from "./UserSummaryCard";
import TextButton from "./TextButton";

// Stylesheet
import "./Dashboard.scss";

export default function Dashboard() {

  const dashboard = (
    <section className="dashboard-card--container">
      <SummaryCard/>
      <Link to="/clinics">
        <DashboardCard category="clinics">
          Clinical Visits
        </DashboardCard>
        </Link>
      <Link to="/labs">
        <DashboardCard category="labs">
          Lab Records
        </DashboardCard>
      </Link>
      <Link to="/medications">
        <DashboardCard category="medications">
          Medications
        </DashboardCard>
      </Link>
      <Link to="/vaccinations">
        <DashboardCard category="vaccinations">
          Vaccinations
        </DashboardCard>
      </Link>
  </section>
  );

  const welcome = (
    <section className="welcome--container">
      <h1 className="welcome--title">Welcome to MediMe</h1>
      <h2 className="welcome--text">Keep track of your health whenever and wherever!</h2>
      <div className="welcome--user-action">
        <TextButton userAction color="secondary">Get started</TextButton>
        <TextButton userAction variant="outlined" color="secondary" style={{ border: '1.5px solid'}}>Log In</TextButton>
      </div>
    </section>
  )

  const viewByUser = (userId) => {
    return userId
      ? dashboard
      : welcome
  };

  return viewByUser(0);
};