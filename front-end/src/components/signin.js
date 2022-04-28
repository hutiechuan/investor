import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

import '../App.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.getUser = this.getUser.bind(this);
    this.state = {
      username: "",
      password: "",
      submitted: false,
      message: "",
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  getUser(id) {
    var data = {
      username: this.state.username,
      password: this.state.password
    };
    console.log(data);
    TutorialDataService.signin(data)
      .then(response => {
        this.setState({
          username: "",
          password: "",
          submitted: true,
          message: ""
        });
        console.log('success sign in!')
        console.log(response.data);
      })
      .catch(e => {
        console.log(e.response.data);
        this.setState({
          message: e.response.data
        });
      });
  }
  
  render() {
    return (
        <div className="text-center m-5-auto">
        <h2>Sign in to us</h2>
        <form>
          {this.state.message ? <p className="alert alert-danger" role="alert"> {this.state.message}</p> : ""}
            <p>
                <label>Username</label><br/>
                <input type="text" 
                  id = "username"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                  required />
            </p>
            <p>
                <label>Password</label><br/>
                <input type="password" name="password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                 required />
            </p>
            <p>
                <button id="sub_btn" type="button" onClick={this.getUser}>Sign in</button>
            </p>
        </form>
        </div>
        

    );
  }
  
}