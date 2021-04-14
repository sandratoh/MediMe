import DoseCard from "../components/Vaccinations/Doses/DoseCard";

export default {
  title: "DoseCard",
  component: DoseCard,
};

export const Dose1 = () => (
  <DoseCard current="1" total="3" date_taken="Sun Apr 12 2012"></DoseCard>
);
