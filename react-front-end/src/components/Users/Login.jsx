// Libraries
import { useContext, useState } from "react";
import { Redirect, Link } from "react-router-dom";

// Components
import IconButton from "../IconButton";
import PasswordInput from "./PasswordInput";
import TextInput from "../TextInput";

// Material UI Component
import Alert from "@material-ui/lab/Alert";

// Helpers
import { dataContext } from "../Provider/DataProvider";

// Stylesheet
import "../../styles/form.scss";

export default function Login() {
  const { loginUser, setUserDetailId } = useContext(dataContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redirect state
  const [redirect, setRedirect] = useState(false);

  // Validate form if empty
  const [validate, setValidate] = useState(false);

  // Show error message if unsuccessful login
  const [error, setError] = useState(false);

  const wrongPassword = () => {
    if(error) {
      return (
        <Alert severity="error">Your password or email is incorrect.</Alert>
      )
    }
    return null
  }

  const onLogin = () => {
    if (!email || !password.password) {
      return setValidate(true);
    }

    const userDetail = { email, password: password.password };

    loginUser(userDetail).then((res) => {
      if (!res) {
        setValidate(true);
        setError(true);
        return;
      }
      setUserDetailId(res.data.id);
      setRedirect(true);
    });
  };

  return (
    <section className="login">
      {redirect && <Redirect to="/" />}
      <h1 className="login-form--title">Login</h1>
      <div className="login-form--container">
        <div className="login-form--field">
          <div data-testid="email-input">
            <TextInput
              required
              value={email}
              setInput={setEmail}
              validate={validate}
            >
              Email:
            </TextInput>
          </div>
          <div data-testid="password-input">
            <PasswordInput
              required
              value={password}
              setInput={setPassword}
              validate={validate}
            >
              Password:
            </PasswordInput>
            {wrongPassword()}
          </div>
        </div>
        <div className="login-form--user-action">
          <IconButton
            login
            variant="contained"
            color="secondary"
            onClick={onLogin}
          >
            LOGIN
          </IconButton>
        </div>
        <div className="login-form--redirect">
          <p>
            Don't have an account yet?
            <span> </span>
            <Link to="/signup" className="link-text">
              Sign up here!
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
