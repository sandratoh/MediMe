// Libraries
import { useState, useContext } from "react";
import { Redirect } from "react-router-dom";

// Components
import DateInput from "../DateInput";
import IconButton from "../IconButton";
import TextInput from "../TextInput";

// Material UI Components
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

// Helpers
import { dataContext } from "../Provider/DataProvider";
import { findNameById } from "../../helpers/selectors";

// Stylesheets
import "../../styles/form.scss";
import "./MedicationsList.scss";

export default function EditMedication() {
  const {
    doctors,
    editMedication,
    medications,
    medicationEditId,
    pharmacies,
  } = useContext(dataContext);

  const medication = medications.find(
    (medication) => medication.id === medicationEditId
  );

  const [date, setDate] = useState(medication.prescribed_date);
  const [medicationName, setMedicationName] = useState(medication.name);
  const [nickname, setNickname] = useState(medication.nickname);
  const [pharmacy, setPharmacy] = useState(
    findNameById(pharmacies, medication.pharmacy_id)
  );
  const [doctor, setDoctor] = useState(
    findNameById(doctors, medication.prescribed_doctor_id)
  );
  const [refills, setRefills] = useState(medication.refills_remaining);
  const [instructions, setInstructions] = useState(medication.instructions);
  const [checkbox, setCheckbox] = useState({
    food: medication.is_take_with_food,
    water: medication.is_take_with_water,
  });

  // Redirect state
  const [redirect, setRedirect] = useState(false);

  // Validate form error state
  const [validate, setValidate] = useState(false);

  const handleChange = (event) => {
    setCheckbox({ ...checkbox, [event.target.name]: event.target.checked });
  };

  const onCancel = () => setRedirect(true);

  const onSave = () => {
    const medicationData = {
      user_id: 1,
      name: medicationName,
      nickname: nickname,
      prescribed_date: date,
      pharmacy_id: pharmacy,
      prescribed_doctor_id: doctor,
      refills_remaining: refills,
      instructions: instructions,
      is_take_with_food: checkbox.food,
      is_take_with_water: checkbox.water,
    };

    editMedication(medicationData).then((res) => {
      res.data.error ? setValidate(true) : setRedirect(true);
    });
  };

  return (
    <section className="medications-edit">
      {redirect && <Redirect to="/medications/view" />}
      <h1 className="medications-list--title">Update Medication</h1>
      <div className="medications-form--container">
        <div className="medications-form--field">
          <DateInput
            required
            date={date}
            setInput={setDate}
            validate={validate}
          >
            Date:
          </DateInput>
          <TextInput
            required
            value={medicationName}
            setInput={setMedicationName}
            validate={validate}
          >
            Medication Name:
          </TextInput>
          <TextInput value={nickname} setInput={setNickname}>
            Nickname:
          </TextInput>
          <TextInput
            required
            value={pharmacy}
            setInput={setPharmacy}
            validate={validate}
          >
            Pharmacy:
          </TextInput>
          <TextInput
            required
            value={doctor}
            setInput={setDoctor}
            validate={validate}
          >
            Prescribed Doctor:
          </TextInput>
          <div className="medications-form--refills">
            <p className="form-label">Refills Remaining:</p>
            <div>
              <IconButton
                onClick={() => {
                  setRefills(Math.max(refills - 1, 0));
                }}
              >
                <RemoveCircleIcon />
              </IconButton>
              {refills}
              <IconButton
                onClick={() => {
                  setRefills(refills + 1, 5);
                }}
              >
                <AddCircleIcon />
              </IconButton>
            </div>
          </div>
          <TextInput value={instructions} setInput={setInstructions}>
            Instructions:
          </TextInput>
        </div>
        <div className="medications-form--checkbox">
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkbox.food}
                  onChange={handleChange}
                  name="food"
                  color="default"
                />
              }
              label="Take with food"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkbox.water}
                  onChange={handleChange}
                  name="water"
                  color="default"
                />
              }
              label="Take with water"
            />
          </FormGroup>
        </div>
        <div className="medications-form--user-action">
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
