// Libraries
import { useContext } from "react";
import { Link } from "react-router-dom";

// Components
import DashboardCard from "./DashboardCard";
import UserSummaryCard from "./Users/UserSummaryCard";
import TextButton from "./TextButton";

// Helpers
import { dataContext } from "./Provider/DataProvider";

// Stylesheet
import "./Dashboard.scss";

export default function Dashboard() {
  const { users, userDetailId } = useContext(dataContext);

  const dashboard = (
    <section className="dashboard-card--container">
      <UserSummaryCard />
      <Link to="/clinics">
        <DashboardCard category="clinics">Clinical Visits</DashboardCard>
      </Link>
      <Link to="/labs">
        <DashboardCard category="labs">Lab Records</DashboardCard>
      </Link>
      <Link to="/medications">
        <DashboardCard category="medications">Medications</DashboardCard>
      </Link>
      <Link to="/vaccinations">
        <DashboardCard category="vaccinations">Vaccinations</DashboardCard>
      </Link>
    </section>
  );

  const welcome = (
    <section className="welcome--container">
      <h1 className="welcome--title">Welcome to MediMe</h1>
      <h2 className="welcome--text">
        Keep track of your health whenever and wherever!
      </h2>
      <div className="welcome--user-action">
        <Link to="/signup">
          <TextButton userAction color="secondary">
            Get started
          </TextButton>
        </Link>
        <Link to="/login">
          <TextButton
            userAction
            variant="outlined"
            color="secondary"
            style={{ border: "1.5px solid" }}
          >
            Log In
          </TextButton>
        </Link>
      </div>
    </section>
  );

  const user = users.find((user) => user.id === userDetailId);

  const viewByUser = (user) => (user ? dashboard : welcome);

  return viewByUser(user);
}
