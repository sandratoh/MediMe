// Libraries
import { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";

// Components
import TextInput from "../TextInput";
import TextButton from "../TextButton";

// Stylesheet
import "../../styles/form.scss";

export default function Signup2() {
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
      <div className="signup-form--title">
        <h1>Create Account</h1>
        <h4 className="signup-form--subtitle">Step 2 of 2 : Your Account</h4>
      </div>

      <div className="signup-form--container">
        <div className="signup-form--field">
          <TextInput
            required
            value={email}
            setInput={setEmail}
            validate={validate}
          >
            Email:
          </TextInput>
          <TextInput
            type="password"
            required
            value={password}
            setInput={setPassword}
            validate={validate}
          >
            Password:
          </TextInput>
        </div>
        <div className="signup-form--user-action">
          <TextButton variant="contained" color="secondary" onClick={onSubmit}>
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
