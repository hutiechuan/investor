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
      password: "",
      submitted: false,
      message: ""
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
          password: "",
          submitted: true,
          message: ""
        });
        //console.log(response.data);
      })
      .catch(e => {
        console.log(e);
        this.setState({
          message: "Username/Email duplicate!" 
        });
      });
  }
  newUser() {
    this.setState({
      id: null,
      username: "",
      email: "",
      password: "",
      submitted: false
    });
  }
  
  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div className="text-center m-5-auto">
            <h4>You signed up successfully!</h4>
            <p>
              <a href="/login" className="button">Log in</a>
            </p>
            <p>
              <button onClick={this.newUser}>Sign up</button>
            </p>
          </div>
        ) : (
          <div className="text-center m-5-auto">
          <h2>Join us</h2>
          <h5>Create your personal account</h5>
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
        )}
    </div>
    );
  }
  
}