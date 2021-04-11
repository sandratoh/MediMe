import { action } from "@storybook/addon-actions";
import ClinicGroupedButtons from "../components/ClinicGroupedButtons";
import '../index.scss';


export default { 
  title: 'Grouped Button',
  component: ClinicGroupedButtons,
 };



export const Initial = () => (
  <ClinicGroupedButtons
    // clinical_visits={clinical_visits}
    // onChange={action("onChange")}
    
    
  >
  </ClinicGroupedButtons>
);

export const Preselected = () => (
  <ClinicGroupedButtons
  // clinical_visits={clinical_visits}
  // onChange={action("onChange")}

  value={"CLINIC"}
  >
  </ClinicGroupedButtons>
);

export const Clickable = () => (
  <ClinicGroupedButtons
  
  onClick={action('Button clicked')}
  >
  </ClinicGroupedButtons>
);
