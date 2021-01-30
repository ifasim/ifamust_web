import axios from "axios";
import * as actionTypes from "./actionTypes";
import { loginURL, signupURL } from "../../constants"
import { auth, provider} from '../../firebase'
import  db from '../../firebase'
import firebase from 'firebase'
import { authAxios } from "../../utils";
import { userIDURL } from "../../constants";




export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authUser = () => {
  return {
    type: actionTypes.AUTH_USER
  };
};

export const authSuccess = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const authLogin = (username, password) => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post(loginURL, {
        username: username,
        password: password
      })
      .then(res => {
        const token = res.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout(3600));
      })
      .catch(err => {
        dispatch(authFail(err));
        return err
      });
  };
};

export const authSignup = (username, email, password1, password2, uid, photo, displayName) => {
  return dispatch => {
    dispatch(authStart());
    const user = {
      uid: uid,
      username: username,
      email: email,
      photo: photo,
      displayName: displayName

    }

    console.log("user_in_auth: ", user)

  

    axios
      .post(signupURL, {
        username: username,
        email: email,
        password1: password1,
        password2: password2
      })
      .then(res => {
        const token = res.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);

      
        // add user to firebase
        

        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout(3600));
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
};


export const authFirebase = () => {
  return dispatch => {
    dispatch(authUser());
      auth.signInWithPopup(provider).then(response => {
        console.log('inside auth action: data::')
        console.log(response.data)
      })
      .catch(error => alert(error.message));
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (token === undefined) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
