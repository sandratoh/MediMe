import { useContext, useState } from "react";
import { Redirect } from "react-router";
import BackButton from "../BackButton";

import TextInput from "../TextInput";
import CountButton from "../CountButton"

import IconButton from "../IconButton";
// import { dataContext } from "../hooks/DataProvider";

import "../../styles/form.scss";

export default function VaccineNew() {

  const [redirect, setRedirect] = useState('');

  const [vaccine, setVaccine] = useState('');
  const [doseNum, setDoseNum] = useState(null);

  const onCancel = () => setRedirect(true);
  const onSave = () => console.log("saved button clikced");

  return (
    <section className="clinics-new">
      {redirect && <Redirect to="/vaccinations" />}
      <div className="clinics-list--icons">
        <BackButton />
      </div>
      <h1 className="clinics-list--title">New Vaccination</h1>
      <div className="clinics-form--container">
        <div className="clinics--form--field">
          
          <TextInput required value={vaccine} setInput={setVaccine}>
            Vaccine Name
          </TextInput>

          <p className="form-label">Total Number of Doses</p>
          
          <CountButton />
        </div>
        <div className="clinics-form--user-action">
          <IconButton
            cancel
            variant="outlined"
            color="secondary"
            onClick={onCancel}
          >
            Cancel
          </IconButton>
          <IconButton
            save
            variant="contained"
            color="secondary"
            onClick={onSave}
          >
            Save
          </IconButton>
        </div>
      </div>
    </section>
  );
}