import { Link } from "react-router-dom";
import DashboardCard from "./DashboardCard";
import SummaryCard from "./UserSummaryCard";
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
    <p>Welcome</p>
  )

  const viewByUser = (userId) => {
    return userId
      ? dashboard
      : welcome
  };


  return viewByUser(1);
};