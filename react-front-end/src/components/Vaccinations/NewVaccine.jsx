// Libraries
import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";

// Components
import TextInput from "../TextInput";
import IconButton from "../IconButton";

// Material UI Components
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

// Helpers
import { dataContext } from "../hooks/DataProvider";

// Stylesheet
import "../../styles/form.scss";

export default function VaccineNew() {
  const { addVaccinationRecord, setVaccinationDetailId } = useContext(
    dataContext
  );

  const [vaccine, setVaccine] = useState("");
  const [totalDose, setTotalDose] = useState(1);

  // Redirect state
  const [redirectBack, setRedirectBack] = useState(false);
  const [redirectSuccess, setRedirectSuccess] = useState(false);

  // Validate form error state
  const [validate, setValidate] = useState(false);

  const onCancel = () => setRedirectBack(true);

  const onSave = () => {
    const vaccinationData = {
      name: vaccine,
      total_num_doses: totalDose,
    };

    addVaccinationRecord(vaccinationData)
      .then((res) => {
        vaccinationData.name ? setRedirectSuccess(true) : setValidate(true);
        return res;
      })
      .then((res) => {
        setVaccinationDetailId(res.data[0].id);
      });
  };

  return (
    <section className="vaccinations-new">
      {redirectBack && <Redirect to="/vaccinations" />}
      {redirectSuccess && <Redirect to="/vaccinations/success" />}
      <h1 className="vaccinations-list--title">New Vaccination</h1>
      <div className="vaccinations-form--container">
        <div className="vaccinations--form--field">
          <TextInput
            required
            value={vaccine}
            setInput={setVaccine}
            validate={validate}
          >
            Vaccine Name:
          </TextInput>

          <p className="form-label">Total Number of Doses</p>
          <div>
            <IconButton
              onClick={() => {
                setTotalDose(Math.max(totalDose - 1, 0));
              }}
            >
              <RemoveCircleIcon />
            </IconButton>
            {totalDose}
            <IconButton
              onClick={() => {
                setTotalDose(totalDose + 1, 5);
              }}
            >
              <AddCircleIcon />
            </IconButton>
          </div>
        </div>
        <div className="vaccinations-form--user-action">
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
