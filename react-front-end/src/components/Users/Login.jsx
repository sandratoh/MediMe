// Libraries
import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";

// Components
import TextInput from "../TextInput";
import PasswordInput from "./PasswordInput";
import IconButton from "../IconButton";

// Stylesheet
import "../../styles/form.scss";
import { dataContext } from "../hooks/DataProvider";

export default function Login() {
  const { loginUser, userDetailId, setUserDetailId } = useContext(dataContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redirect state
  const [redirect, setRedirect] = useState(false);

  // Validate form error state
  const [validate, setValidate] = useState(false);

  const onLogin = () => {
    const userDetail = {email, password}
    // password:password
    
    loginUser(userDetail)
    .then(res => {
      console.log('res from login,', res);

      // res.data.error ? setValidate(true) : setUserDetailId(res.id);
      res.data ? setValidate(true) : setRedirect(true);

      // if (res.password === password) {
      //   setUserDetailId(res.id);
      //   setRedirect(true);
      // }
      // console.log(res);
      // res.data.error ? setValidate(true) : setRedirect(true)
      console.log('userDetailId', userDetailId);
      })
      // .then(res => setRedirect(true));
  };

  return (
    <section className="login">
      {redirect && <Redirect to="/" />}
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
          <PasswordInput
            required
            value={password}
            setInput={setPassword}
            validate={validate}
          >
            Password:
          </PasswordInput>
        </div>
        <div className="login-form--user-action">
          <IconButton
            login
            variant="contained"
            color="secondary"
            onClick={onLogin}
          >
            Login
          </IconButton>
        </div>
      </div>
    </section>
  );
}
