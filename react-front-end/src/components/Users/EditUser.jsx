// Libraries
import { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";

// Components
import TextInput from "../TextInput";
import ClinicGroupedButtons from "../Clinics/ClinicGroupedButtons";
import DateInput from "../DateInput";
import IconButton from "../IconButton";

// Helpers
import { dataContext } from "../hooks/DataProvider";
// import { findNameById } from "../../helpers/selectors";

// Stylesheet
import "../../styles/form.scss";

export default function EditUser() {
  const {
    users,
    userEditId,
    editUser,
  } = useContext(dataContext);

  const user = users.find(
    (user) => user.id === 1
  );

  console.log("user: ", user)
  // console.log("users: ", users)
 


  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [bloodType, setBloodType] = useState(null)
  const [rhGroup, setRhGroup] = useState(null)

  // Manage redirect state based on axios call
  const [redirect, setRedirect] = useState(false);

  const [validate, setValidate] = useState(false);

  // useEffect(() => {
  //   setHeight(prevState => ({ ...prevState, height_in_cm: user.height_in_cm}));
  //   // setWeight(user.weight_in_lb);
  // }, [users]);

  // // useEffect(() => {
  // //   setState(state => ({ ...state, a: props.a }));
  // // }, [props.a]);

  

  const onCancel = () => setRedirect(true);

  const onSave = () => {
    const userDetail = {
      height_in_cm: height,
      weight_in_lb: weight,
      blood_type: bloodType,
      rh_group: rhGroup
    };

    editUser(userDetail).then((res) => {
      res.data.error ? setValidate(true) : setRedirect(true);
    });
  };

  return (
    <section className="clinics-edit">
      {redirect && <Redirect to="/clinics/view" />}
      <h1 className="clinics-form--title">Your MEdi-info</h1>
      <div className="clinics-form--container">
        <div className="clinics-form--field">
          
          {/* <ClinicGroupedButtons state={visitType} onChange={setVisitType} /> */}
          <TextInput
            
            value={height}
            setInput={setHeight}
            validate={validate}
          >
            Height(cm):
          </TextInput>
          <TextInput
            
            value={weight}
            setInput={setWeight}
            validate={validate}
          >
            Weight(cm):
          </TextInput>
          
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
  )

}