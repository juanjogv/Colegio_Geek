
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

import Particles from "./Canvas";
import Login from "./pages/Login";
import UserRegister from "./pages/UserRegister";
import GroupRegister from "./pages/GroupRegister";
import SubjectRegister from "./pages/SubjectRegister";
import StudentBoard from "./pages/StudentBoard";
import './css/App.scss';

const App = () => {
  return (
    <div className="container-fluid pg-cont">
      <div className="canvas">
        <Particles />
      </div>
      <Router>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 1}}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" component={Login} />
          <Route path="/register" component={UserRegister} />
          <Route path="/group-register" component={GroupRegister} />
          <Route path="/subject-register" component={SubjectRegister} />
          <Route path="/student-board" component={StudentBoard} />
        </AnimatedSwitch>
      </Router>
    </div>
  );
};
export default App;
