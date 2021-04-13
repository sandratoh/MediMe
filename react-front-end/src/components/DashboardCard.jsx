import "./DashboardCard.scss";
import Card from "@material-ui/core/Card";

export default function DashboardIcon(props) {
  return (
    <Card
      className="dashboard-card"
    >
      {props.children}
    </Card>
  )
}