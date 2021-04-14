import { Link } from "react-router-dom";
import Header from "../Header";
import ClinicsCardList from "./ClinicsCardList";
import IconButton from "../IconButton";
import "./ClinicsList.scss";
import { useContext, useEffect, useState } from "react";

import axios from "axios";
import { dataContext } from "../hooks/DataProvider";
import BackButton from "../BackButton";

export default function ClinicsList(props) {
  // const { fetchAllClinics } = useContext(dataContext)


  // const [ reRender, setReRender ] = useState(false); 

  // useEffect(() => {
  //  fetchAllClinics();

  //  // clean up function setReRender(false);
  // //  return () => setReRender(false);

  // }, [reRender, fetchAllClinics]);

  // console.log('ClinicsList ReRender state', reRender);

  return (
    <section className="clinics-list">
      <Header />
      <div className="clinics-list--icons">
        <BackButton />
        <IconButton new color="secondary" variant="contained">
          <Link to="/clinics/new">New</Link>
        </IconButton>
      </div>
      <h1 className="clinics-list--title">Clinical Visits</h1>
      <div className="clinics-list--content">
        {/* <ClinicsCardList reRender={setReRender}/> */}
        <ClinicsCardList />
      </div>
    </section>
  );
}
