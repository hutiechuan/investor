import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import '../App.css'
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail= this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.newUser= this.newUser.bind(this);
    this.state = {
      id: null,
      username: "",
      email: "",
      password: ""
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  saveUser() {
    var data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    console.log(data);
    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: null,
          username: "",
          email: "",
          password: ""
        });
        //console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  newUser() {
    this.setState({
      id: null,
      username: "",
      email: "",
      password: ""
    });
  }
  
  render() {
    return (
      <div className="text-center m-5-auto">
      <h2>Join us</h2>
      <h5>Create your personal account</h5>
      <form>
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
              <label>Email address</label><br/>
              <input type="email" name="email"
                id = "email"
                value={this.state.email}
                onChange={this.onChangeEmail}
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
              <button id="sub_btn" type="button" onClick={this.saveUser}>Register</button>
          </p>
      </form>
      </div>
    );
  }
  
}