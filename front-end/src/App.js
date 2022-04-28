import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import Signin from "./components/signin";
import Signup from "./components/signup";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            Hirebeat
          </a>
          <div className="navbar-nav mr-auto">

            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/signin"} className="nav-link">
              Signin 
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/signup"} className="nav-link">
              Signup
              </Link>
            </li>
            
          </div>
        </nav>
        <div className="container mt-3">
        <Routes>
            <Route exact path= "/" element={<TutorialsList/>} />
            <Route exact path= "tutorials" element={<TutorialsList/>} />
            <Route exact path="/add" element={<AddTutorial/>} />
            <Route exact path="/tutorials/:id" element={<Tutorial/>} />
            <Route exact path= "/signin" element={<Signin/>} />
            <Route exact path= "/signup" element={<Signup/>} />
        </Routes>

        </div>
      </div>
    );
  }
}
export default App;