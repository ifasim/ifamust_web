import React, {useEffect} from "react";
import "./Login.css";
import { accessUrl } from "./spotify";
import { Button } from '@material-ui/core'
import { auth, provider} from '../firebase'
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { authLogin, authUser, authSignup } from "../store/actions/auth";
import { fetchUser } from "../store/actions/user";
import image from '../assets/images/pup_login_image.png'
import login from '../assets/images/login.png'
import  db from '../firebase'
import logo from '../assets/images/citipup.png'






import {
  Container,
  Image,
  Menu,
  Segment,
  Icon, 
} from "semantic-ui-react";



class LoginForm extends React.Component {

  state = {
    username: "",
    password: "",
    error: "",
    email: "",
    password1: "",
    password2: "",
    uid: "",
    photo: "",
    displayName: ""
  };


  handleSignup = () => {
  
    const { username, email, password1, password2, uid, photo, displayName } = this.state;
    const user = {
      uid: uid,
      photo: photo,
      email: email,
      displayName: displayName,
     }
    //  add user to firebase
    db.collection("users").doc(uid).set(user)



    this.props.signup(username, email, password1, password2, uid, photo, displayName);
  }

  handleSubmit = () => {
    // e.preventDefault();
    //loging into django backend
    const { username, password, email, uid, photo, displayName } = this.state;
    this.props.login(username, password);
    //set User
    const user = {
              uid: uid,
              photo: photo,
              email: email,
              displayName: displayName,
             }
    this.props.user(user)


    // pass in the user details


    {this.state.error ? 
      console.log('logging in...')
     : 
       this.handleSignup() 
    };

  };

  handleGoogleLogin = () => {
    auth.signInWithPopup(provider).then(response => {

     
      const email = response.user.email
      const password = response.user.uid
      const username = email.replace("@gmail.com", "")
      const photo = response.user.photoURL
      const uid = response.user.uid
      const displayName = response.user.displayName
    

      
      // const password = response
   

      this.setState({
        username: username,
        password: password,
        photo: photo,
        displayName: displayName,
        uid: uid,
        
        email: email,
        password1: password,
        password2: password
      })

      this.handleSubmit()

    })
    .catch(error => alert(error.message));
    
   this.props.loginWithGoogle();   
};



  render() {
    const { error, loading, token, user,  } = this.props;
    // const { username, password } = this.state;
    if (token) {
      return <Redirect to="/" />;
    }
    return (
    <div className="login">
      <div className="leftLogin"> 
      

      {/* <Image src={login}  style={{backgrounfSize: 'cover' }}/> */}
      <Image src={image} style={{width: '60%'}} />

      <div className="leftLogin__info">
        <strong>
            <h1>PUPPY LOVE</h1>
        </strong>
          
          <p>Your journey to find that special puppy love starts here</p>

      </div>
      
      </div>

      <div className='rightLogin'>

        <div header onClick={() => this.props.history.push("/")}>
            {/* <Image src={logo} style={{ width: '200px', marginLeft: "200px", textAlign: "center"}} /> */}

            <h1>Login | Register</h1>
            <p>Login to your account or resgister a new account</p>
    {/* 
                <span style={{ color: '#ff7878'}}>KC.BEAUTY</span> */}
        </div>

        <div className='login__button'>
             <div className='login__buttonItem' onClick={this.handleGoogleLogin}>
               <span>
                   SIGN IN WITH GOOGLE
               </span>
                
              </div>
        </div>
     
      </div>

    </div>
  );
}
}


const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token,
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(authLogin(username, password)),
    loginWithGoogle: () => dispatch(authUser()),

    signup: (username, email, password1, password2, uid, photo, displayName) =>
      dispatch(authSignup(username, email, password1, password2, uid,photo, displayName )),

    user: (user) => dispatch(fetchUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
