// Libraries
import { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";

// Components
import TextInput from "../TextInput";
import PasswordInput from "./PasswordInput";
import TextButton from "../TextButton";

// Stylesheet
import "../../styles/form.scss";

export default function Signup1() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redirect state
  const [redirect, setRedirect] = useState(false);

  // Validate form error state
  const [validate, setValidate] = useState(false);

  const onSubmit = () => {
    console.log("Submit button clicked");
  };

  return (
    <section className="signup">
      {/* {redirect && <Redirect to="/" />} */}
      <h1 className="signup-form--title">Create Account</h1>

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
          <TextInput
            required
            value={email}
            setInput={setEmail}
            validate={validate}
          >
            Email:
          </TextInput>
          <PasswordInput
            required
            value={password}
            setInput={setPassword}
            validate={validate}
          >
            Password:
          </PasswordInput>
        </div>
        <div className="signup-form--user-action">
          <TextButton
            userAction
            variant="contained"
            color="secondary"
            onClick={onSubmit}
          >
            Submit
          </TextButton>
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
