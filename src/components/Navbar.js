import React from 'react'
// import PropTypes from 'prop-types'
import {Link,NavLink} from "react-router-dom";

const Navbar=()=> {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">NewsMonkey</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/general">General</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/business">Business</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/entertainment">Entertainment</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/health">Health</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/science">Science</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/sports">Sports</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/technology">Technology</NavLink></li>
        </ul>
        </div>
    </div>
    </nav>
      </div>
    )
  }
export default Navbar
