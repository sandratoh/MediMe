import { Link } from "react-router-dom";
import DashboardCard from "./DashboardCard";
import "./Dashboard.scss";

export default function Dashboard() {

  return (
    <section className="dashboard-card--container">
      <DashboardCard category="clinics">
        <Link to="/clinics">Clinics</Link>
      </DashboardCard>
      <DashboardCard category="labs">
        <Link to="/labs">Labs</Link>
      </DashboardCard>
      <DashboardCard category="medications">
        <Link to="/medications">Medications</Link>
      </DashboardCard>
      <DashboardCard category="vaccinations">
        <Link to="/vaccinations">Vaccinations</Link>
      </DashboardCard>
    </section>
  );
};