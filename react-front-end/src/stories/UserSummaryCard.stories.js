import UserSummary from "../components/UserSummaryCard";

export default { 
  title: 'Summary Card 1',
  component: UserSummary,
};

export const Required = () => (
  <UserSummary
    required
  >
    Medical Center:
  </UserSummary>
);