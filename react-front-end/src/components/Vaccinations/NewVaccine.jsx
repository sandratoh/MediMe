// Libraries
import { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

// Components
import TextInput from "../TextInput";
import CountButton2 from "../CountButton";
import IconButton from "../IconButton";

// Material UI Components
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

// Helpers
import { dataContext } from "../hooks/DataProvider";

// Stylesheet
import "../../styles/form.scss";

export default function VaccineNew() {
  const { addVaccinationRecord } = useContext(dataContext);

  const [vaccine, setVaccine] = useState("");
  const [totalDose, setTotalDose] = useState(1);

  // Redirect state
  const [redirect, setRedirect] = useState("");

  const onCancel = () => setRedirect(true);

  const onSave = () => {
    const vaccinationData = {
      name: vaccine,
      total_num_doses: totalDose,
    };

    addVaccinationRecord(vaccinationData).then((res) => {
      !res.data.error && setRedirect(true);
    });
  };

  return (
    <section className="clinics-new">
      {redirect && <Redirect to="/vaccinations" />}
      <div className="clinics-list--icons">
        <Link to="/vaccinations">
          <ArrowBackIosIcon />
        </Link>
      </div>
      <h1 className="clinics-list--title">New Vaccination</h1>
      <div className="clinics-form--container">
        <div className="clinics--form--field">
          <TextInput required value={vaccine} setInput={setVaccine}>
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
