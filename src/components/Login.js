import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { Navigate   } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
		super(props);
        this.state = {
            isLoggedIn: false,
            userID: "",
            name: "",
            email: "",
            picture: ""
        }

	}

//   state = {
//     isLoggedIn: false,
//     userID: "",
//     name: "",
//     email: "",
//     picture: ""
//   };

  responseFacebook = response => {

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

  componentClicked = () => console.log("clicked");

  render() {
    let content;

    if (this.state.isLoggedIn) {
        return <Navigate to="/" push={true} />

    } else {
        content = (
        <div className="m-5">
            <h1>Please Login With Facebook</h1>
            <FacebookLogin
            appId="1024089265192073"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
            />
        </div>
        
      );
    }

    return <div>{content}</div>;
  }
}

export default Login;