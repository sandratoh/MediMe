import { Link } from "react-router-dom";
import DashboardCard from "./DashboardCard";
import "./Dashboard.scss";

export default function Dashboard() {

  return (
    <section className="dashboard-card--container">
      <Link to="/clinics">
        <DashboardCard category="clinics">
          Clinics
        </DashboardCard>
        </Link>
      <Link to="/labs">
        <DashboardCard category="labs">
            Labs
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
};