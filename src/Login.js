import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";
import { Button } from '@material-ui/core'
import { auth, provider} from './firebase'

function Login() {

  const handleLogin = () => {
      auth.signInWithPopup(provider)
      .catch(error => alert(error.message));
  };

  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <a href={accessUrl}>LOGIN TO SPOTIFY</a>

      <Button onClick={handleLogin}>Login With Google</Button>

    </div>
  );
}

export default Login;
