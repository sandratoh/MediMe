import Header from "./Header";
import ClinicsCardList from "./ClinicsCardList";
import IconButton from "./IconButton";
import './ClinicsList.scss';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const clinics = [
  {
    id: 1,
    name: "Dr. Dodek Wenner Family Practice",
  },
  {
    id: 2,
    name: "Dr. Howard Liang S.H. Inc.",
  },
  {
    id: 3,
    name: "Vancouver General Hospital",
  },
];

const clinical_visits = [
  {
    id: 1,
    user_id: 1,
    clinic_id: 3,
    referral_doctor_id: 2,
    date: "2018-09-09T07:00:00.000Z",
    type_of_visit: "HOSPITAL",
    reason_for_visit: "Stomach pain and vomit",
    doctor_diagnosis: "Food poisoning",
  },
  {
    id: 2,
    user_id: 1,
    clinic_id: 1,
    referral_doctor_id: 1,
    date: "2019-02-05T08:00:00.000Z",
    type_of_visit: "CLINIC",
    reason_for_visit: "Headache and fever",
    doctor_diagnosis: "Seasonal flu",
  },
];


export default function ClinicsList(props) {

  return (
    <section className="clinics-list">
      <Header />
      <div className="clinics-list--icons">
      <ArrowBackIosIcon/>
      <IconButton 
        new 
        color="secondary" 
        variant="contained"
      >
        New
      </IconButton>
      </div>
      <h2 className="clinics-list--title">Clinical Visits</h2>
      <div className="clinics-list--content">
      <ClinicsCardList/>
      </div>
    </section>
  )

}