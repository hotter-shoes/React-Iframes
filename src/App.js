import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ZMags from "./views/zmags";
import DotDigital from "./views/dotdigital";
import LiveHelp from "./views/livehelp";

import './App.css';



class Header extends React.Component{

  render(){
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/zmags">Zmags</Link>
          </li>
          <li>
            <Link to="/dotdigital">DotDigital</Link>
          </li>
          <li>
            <Link to="/livehelp">LiveHelp</Link>
          </li>
        </ul>

        <hr />

        <Route path="/zmags" component={ZMags} />
        <Route path="/dotdigital" component={DotDigital} />
        <Route path="/livehelp" component={LiveHelp} />
      </div>
    </Router>
  );
  }
}

export default Header;
