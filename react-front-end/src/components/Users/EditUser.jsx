// Libraries
import { useState, useContext } from "react";
import { Redirect } from "react-router-dom";

// Components
import TextInputLb from "../TextInputLb";
import TextInputCm from "../TextInputCm";
import IconButton from "../IconButton";
import RhGroupedButtons from "./RhGroupedButtons";
import BloodGroupButtons from "./BloodGroupedButtons";

// Helpers
import { dataContext } from "../hooks/DataProvider";

// Stylesheet
import "../../styles/form.scss";

export default function EditUser() {
  const { users, setUser, userEditId, editUser, userDetailId } = useContext(
    dataContext
  );

  const user = users.find((user) => user.id === userDetailId);

  const [height, setHeight] = useState(user ? user.height_in_cm : "");
  const [weight, setWeight] = useState(user ? user.weight_in_lb : "");
  const [bloodType, setBloodType] = useState(user ? user.blood_type : null);
  const [rhGroup, setRhGroup] = useState(user ? user.rh_group : null);

  // Manage redirect state based on axios call
  const [redirect, setRedirect] = useState(false);

  const [validate, setValidate] = useState(false);

  const onCancel = () => setRedirect(true);

  const onSave = () => {
    const userDetail = {
      ...user,
      height_in_cm: parseInt(height),
      weight_in_lb: parseInt(weight),
      blood_type: bloodType,
      rh_group: rhGroup,
    };

    editUser(userDetail).then((res) => {
      res.data.error ? setValidate(true) : setRedirect(true);
    });
  };

  return (
    <section className="users-edit">
      {redirect && <Redirect to="/" />}
      <h1 className="users-form--title">Your MEdi-info</h1>
      <div className="users-form--container">
        <div className="users-form--field">
          <TextInputCm value={height} setInput={setHeight} validate={validate}>
            Height:
          </TextInputCm>
          <TextInputLb value={weight} setInput={setWeight} validate={validate}>
            Weight:
          </TextInputLb>
          <br />
          <div className="users-form--blood-type">
            <h4>Blood Type:</h4>
            <BloodGroupButtons state={bloodType} onChange={setBloodType} />
          </div>
          <div className="users-form--rh-group">
            <h4>Rh Group:</h4>
            <RhGroupedButtons state={rhGroup} onChange={setRhGroup} />
          </div>
        </div>
        <div className="users-form--user-action">
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
