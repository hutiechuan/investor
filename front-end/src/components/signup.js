import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import '../App.css'
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);
    this.state = {
      id: null,
      title: "",
      description: "", 
      published: false,
      submitted: false
    };
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  saveTutorial() {
    var data = {
      title: this.state.title,
      description: this.state.description
    };
    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  newTutorial() {
    this.setState({
      id: null,
      title: "",
      description: "",
      published: false,
      submitted: false
    });
  }
  
  render() {
    return (
    
      <div className="text-center m-5-auto">
      <h2>Join us</h2>
      <h5>Create your personal account</h5>
      <form action="/home">
          <p>
              <label>Username</label><br/>
              <input type="text" name="first_name" required />
          </p>
          <p>
              <label>Email address</label><br/>
              <input type="email" name="email" required />
          </p>
          <p>
              <label>Password</label><br/>
              <input type="password" name="password" requiredc />
          </p>
          <p>
              <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
          </p>
          <p>
              <button id="sub_btn" type="submit">Register</button>
          </p>
      </form>
      
  </div>








      





















    );
  }
  
}