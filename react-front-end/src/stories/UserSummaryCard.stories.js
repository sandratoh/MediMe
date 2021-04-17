// Components
import UserSummary from "../components/Users/UserSummaryCard";

export default {
  title: "Summary Card 1",
  component: UserSummary,
};

export const Required = () => (
  <UserSummary required>Medical Center:</UserSummary>
);
