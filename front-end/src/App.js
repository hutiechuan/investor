import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import Login from "./components/Login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard"

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
              <Link to={"/login"} className="nav-link">
              Login
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
            <Route exact path= "/login" element={<Login/>} />
            <Route exact path= "/signup" element={<Signup/>} />
            <Route exact path= "/dashboard" element={<Dashboard/>} />

        </Routes>

        </div>
      </div>
    );
  }
}
export default App;