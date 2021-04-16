// Libraries
import { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";

// Components
import TextInput from "../TextInput";
import TextButton from "../TextButton";

// Stylesheet
import "../../styles/form.scss";

export default function Signup1() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Redirect state
  const [redirect, setRedirect] = useState(false);

  // Validate form error state
  const [validate, setValidate] = useState(false);

  const onNext = () => {
    console.log("Next button clicked");
  };

  return (
    <section className="signup">
      {/* {redirect && <Redirect to="/" />} */}
      <div className="signup-form--title">
        <h1>Create Account</h1>
        <h4 className="signup-form--subtitle">Step 1 of 2 : Your Name</h4>
      </div>

      <div className="signup-form--container">
        <div className="signup-form--field">
          <TextInput
            required
            value={firstName}
            setInput={setFirstName}
            validate={validate}
          >
            First Name:
          </TextInput>
          <TextInput
            required
            value={lastName}
            setInput={setLastName}
            validate={validate}
          >
            Last Name:
          </TextInput>
        </div>
        <div className="signup-form--user-action">
          <Link to="/signup/2">
            <TextButton
              next
              variant="contained"
              color="secondary"
              onClick={onNext}
            >
              Next
            </TextButton>
          </Link>
        </div>
        <div className="signup-form--redirect">
          <p>
            Already have an account?
            <span> </span>
            <Link to="/login" className="link-text">
              Log in here!
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
