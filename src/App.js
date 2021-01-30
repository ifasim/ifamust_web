import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect , useSelector, useDispatch} from "react-redux";
import BaseRouter from "./routes";
import * as actions from "./store/actions/auth";
import * as userActions from "./store/actions/user";
import "semantic-ui-css/semantic.min.css";
import CustomLayout from "./containers/Layout";


import { auth } from './firebase'


import { useStateValue } from "./StateProvider";

import { authUser } from "./store/actions/auth";
import { fetchUser} from "./store/actions/user";


import { selectUser} from './store/reducers/user';

import { authAxios } from "./utils";

import { userIDURL } from "./constants";





class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {

  //Redux Layer 
  // const dispatch_redux = useDispatch();
  // const user = useSelector(selectUser);

  ///////// redux layer ////////


    return (
      
      <Router>
        <CustomLayout {...this.props}>
          <BaseRouter />
        </CustomLayout>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    user: () => dispatch(userActions.fetchUser())

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);



// const mapDispatchToProps = dispatch => {
//   return {
//     login: (username, password) => dispatch(authLogin(username, password)),
//     loginWithGoogle: () => dispatch(authUser()),

//     signup: (username, email, password1, password2) =>
//       dispatch(authSignup(username, email, password1, password2))
//   };
// };