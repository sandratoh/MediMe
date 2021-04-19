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
import { currentDate } from "../../helpers/dateHelpers";
import { dataContext } from "../Provider/DataProvider";

// Stylesheet
import "../../styles/form.scss";

export default function NewMedication() {
  const { 
    addMedication, 
    pharmacyExists, 
    addPharmacy,
    doctorExists,
    addDoctor,
   } = useContext(dataContext);

  const [date, setDate] = useState(currentDate());
  const [medicationName, setMedicationName] = useState("");
  const [nickname, setNickname] = useState("");
  const [pharmacy, setPharmacy] = useState("");
  const [doctor, setDoctor] = useState("");
  const [refills, setRefills] = useState(0);
  const [instructions, setInstructions] = useState("");
  const [checkbox, setCheckbox] = useState({
    food: false,
    water: false,
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
    if (!date || medicationName === "" || doctor === "" || pharmacy === "") {
      return setValidate(true);
    }

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

    !pharmacyExists(pharmacy) && addPharmacy({ name: pharmacy });

    !doctorExists(doctor) && addDoctor({ name: doctor });

    addMedication(medicationData).then((res) => {
      !res.data.error && setRedirect(true);
    });
  };

  return (
    <section className="medications-new">
      {redirect && <Redirect to="/medications" />}
      <h1 className="medications-form--title">New Medication</h1>
      <div className="medications-form--container">
        <div className="medications-form--field">
          <DateInput
            required
            value={date}
            setInput={setDate}
            validate={validate}
          >
            Date:
          </DateInput>
          <div data-testid="med--name-input">
            <TextInput
              required
              value={medicationName}
              setInput={setMedicationName}
              validate={validate}
            >
              Medication Name:
            </TextInput>
          </div>
          <div data-testid="med--nickname-input" >
            <TextInput value={nickname} setInput={setNickname}>
              Nickname:
            </TextInput>
          </div>
          <div data-testid="med--pharmacy-input" >
            <TextInput
              required
              value={pharmacy}
              setInput={setPharmacy}
              validate={validate}
            >
              Pharmacy:
            </TextInput>
          </div>
          <div data-testid="med--doctor-input" >
            <TextInput
              required
              value={doctor}
              setInput={setDoctor}
              validate={validate}
            >
              Prescribed Doctor:
            </TextInput>
          </div>
          <div className="medications-form--refills">
            <p className="form-label">Refills Remaining:</p>
            <div>
              <IconButton
                onClick={() => {
                  setRefills(Math.max(refills - 1, 0));
                }}
              >
                <RemoveCircleIcon data-testid="med--minus-button"/>
              </IconButton>
              {refills}
              <IconButton
                onClick={() => {
                  setRefills(refills + 1, 5);
                }}
              >
                <AddCircleIcon data-testid="med--plus-button"/>
              </IconButton>
            </div>
          </div>
          <div data-testid="med--instructions-input" >
            <TextInput value={instructions} setInput={setInstructions}>
              Instructions:
            </TextInput>
          </div>
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
