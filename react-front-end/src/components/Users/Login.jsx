// Libraries
import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";

// Components
import TextInput from "../TextInput";
import IconButton from "../IconButton";

// Stylesheet
import "../../styles/form.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redirect state
  const [redirect, setRedirect] = useState(false);

  // Validate form error state
  const [validate, setValidate] = useState(false);

  const onLogin = () => {
    console.log("Login button clicked");
  };

  return (
    <section className="login">
      {/* {redirect && <Redirect to="/" />} */}
      <h1 className="login-form--title">Login</h1>
      <div className="login-form--container">
        <div className="login-form--field">
          <TextInput
            required
            value={email}
            setInput={setEmail}
            validate={validate}
          >
            Email:
          </TextInput>
          <TextInput
            required
            value={password}
            setInput={setPassword}
            validate={validate}
          >
            Password:
          </TextInput>
        </div>
        <div className="login-form--user-action">
          <IconButton
            login
            variant="contained"
            color="secondary"
            onClick={onSave}
          >
            Login
          </IconButton>
        </div>
      </div>
    </section>
  );
}
