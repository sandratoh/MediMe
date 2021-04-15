// Libraries
import { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";

// Components
import DateInput from "../DateInput";
import IconButton from "../IconButton";
import TextInput from "../TextInput";

// Material UI Components
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

// Helpers
import { currentDate } from "../../helpers/dateHelpers";
import { dataContext } from "../hooks/DataProvider";

// Stylesheet
import "../../styles/form.scss";
import "./MedicationsList.scss";

export default function NewRecord() {
  // const { addLabRecord } = useContext(dataContext);

  const [date, setDate] = useState(currentDate());
  const [medication, setMedication] = useState("");
  const [nickname, setNickname] = useState("");
  const [pharmacy, setPharmacy] = useState("");
  const [doctor, setDoctor] = useState("");
  const [refills, setRefills] = useState(0);
  const [instructions, setInstructions] = useState("");

  // Redirect state
  const [redirect, setRedirect] = useState(false);

  const onCancel = () => setRedirect(true);

  const onSave = () => console.log("Save is clicked");
  // const onSave = () => {
  //   const labDetail = {
  //     user_id: 1,
  //     date,
  //     referral_doctor_id: doctor,
  //     lab_id: lab,
  //     type_of_test: recordType,
  //   };

  //   addLabRecord(labDetail).then((res) => {
  //     !res.data.error && setRedirect(true);
  //   });
  // };

  return (
    <section className="medications-new">
      {redirect && <Redirect to="/medications" />}
      <div className="medications-list--icons">
        <Link to="/medications">
          <ArrowBackIosIcon />
        </Link>
      </div>
      <h1 className="medications-list--title">New Medication</h1>
      <div className="medications-form--container">
        <div className="medications-form--field">
          <TextInput required value={medication} setInput={setMedication}>
            Medication Name:
          </TextInput>
          <TextInput value={nickname} setInput={setNickname}>
            Nickname:
          </TextInput>
          <DateInput required value={date} setInput={setDate}>
            Date:
          </DateInput>
          <TextInput required value={pharmacy} setInput={setPharmacy}>
            Pharmacy:
          </TextInput>
          <TextInput required value={doctor} setInput={setDoctor}>
            Prescribed Doctor:
          </TextInput>
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
          <TextInput required value={instructions} setInput={setInstructions}>
            Instructions:
          </TextInput>
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
