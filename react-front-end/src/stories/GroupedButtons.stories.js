import { action } from "@storybook/addon-actions";
import GroupedButtons from "../components/GroupedButtons";
import '../index.scss';


const clinical_visit =  [
          {
          id: 1,
          type_of_visit: "HOSPITAL"
          
          },
          {
          id: 2,
          type_of_visit: "CLINIC",
          }
         
];

export default { 
  title: 'Grouped Button',
  component: GroupedButtons,
 };

export const Initial = () => (
  <GroupedButtons
    typeOfVisit={clinical_visit}
    onChange={action("onChange")}
  >
  </GroupedButtons>
);

export const Preselected = () => (
  <GroupedButtons
  typeOfVisit={clinical_visit}
  onChange={action("onChange")}
  value={"CLINIC"}
  >
  </GroupedButtons>
);
