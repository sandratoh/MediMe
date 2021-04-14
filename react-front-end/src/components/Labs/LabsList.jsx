import { Link } from "react-router-dom";
import Header from "../Header";
import LabsCardList from "./LabsCardList";
import IconButton from "../IconButton";
import "./LabsList.scss";

import BackButton from "../BackButton";

// const labs = [
//   {
//     id: 1,
//     name: "LifeLabs Medical Laboratory Services - Kingsway",
//   },
//   {
//     id: 2,
//     name:
//       "Greig Associates X-Ray, Ultrasound & Mammography Inc. - Victoria Drive",
//   },
//   {
//     id: 3,
//     name: "West Coast Medical Imaging - New Westminster",
//   },
//   {
//     id: 4,
//     name: "Downtown Radiology - Keefer Imaging",
//   },
//   {
//     id: 5,
//     name: "AIM Medical Imaging - West Broadway",
//   },
// ];

// const lab_records = [
//   {
//     id: 1,
//     user_id: 1,
//     date: "2018-09-15T07:00:00.000Z",
//     referral_doctor_id: 1,
//     lab_id: 3,
//     type_of_test: "XRAY",
//   },
//   {
//     id: 2,
//     user_id: 1,
//     date: "2019-03-30T07:00:00.000Z",
//     referral_doctor_id: 2,
//     lab_id: 1,
//     type_of_test: "BLOOD",
//   },
// ];

export default function LabsList(props) {
  return (
    <section className="labs-list">
      <Header />
      <div className="labs-list--icons">
        <BackButton />
        <IconButton new color="secondary" variant="contained">
          <Link to="/labs/new">New</Link>
        </IconButton>
      </div>
      <h1 className="labs-list--title">Lab Visits</h1>
      <div className="labs-list--content">
        <LabsCardList />
      </div>
    </section>
  );
}
