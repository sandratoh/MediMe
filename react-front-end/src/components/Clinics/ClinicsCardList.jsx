import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../hooks/DataProvider";
import ClinicCard from "./ClinicCard";
import axios from "axios";

export default function ClinicsCardList() {
  const { clinicalVisits, clinics, setClinicalVisitDetail, setClinicalVisits, fetchAllClinics, clinicalVisitDetail } = useContext(
    dataContext
  )

  //  const [ reRender, setReRender ] = useState(false); 

  // rerender true or false, default to false, and if save/delete is successful, then we change to true

  // new state here that keeps track of rerender or not
  // use effect depends on rerender state
  // pass setRerender function to props => new visit/edit visit/clinic detail

  // onsave, ondelete, if successful, then will do their axios stuff, and also setRerender to true

  // cliniccardlist (parent): useEffect(()=> {get all clinics fetch >> cleanup function, setRerender to false}, [reRender state]), 
  

  // console.log("clinical visits in card list", clinicalVisits);
  // make new state to track???

  // useEffect(() => {
  //   fetchAllClinics()
  // }, []);
  
  // useEffect(() => {
  //   axios
  //     .get("/api/clinics")
  //     .then(res => setClinicalVisits(res))
  // }, []);

  const handleClinicCardClick = (id) => setClinicalVisitDetail(id);

  // console.log("cliniical Visits: ", clinicalVisitDetail)
  const visits = clinicalVisits.map((visit) => {
    
    return (
      <Link to={`/clinics/${visit.id}`}>
        <ClinicCard
          key={visit.id}
          className="list-items"
          date={visit.date}
          type={visit.type_of_visit}
          value={visit.clinic_id}
          clinics={clinics}
          onClick={() => handleClinicCardClick(visit.id)}

        />
      </Link>
    );
  });

  return (
    <ul>
      <Link to="/clinics/view">{visits}</Link>
    </ul>
  )
}

