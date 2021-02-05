
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatedSwitch, AnimatedRoute } from "react-router-transition";

import Particles from "./Canvas";
import Login from "./pages/Login";
import AdminBoard from "./pages/AdminBoard";
import UserRegister from "./pages/UserRegister";
import GroupRegister from "./pages/GroupRegister";
import SubjectRegister from "./pages/SubjectRegister";
import ChangePassword from "./pages/ChangePassword";
import StudentBoard from "./pages/StudentBoard";
import TeacherBoard from "./pages/TeacherBoard";

import './css/App.scss';

const App = () => {
  return (
    <div className="container-fluid pg-cont p-0 h-100">
    <div className="canvas">
      <Particles />
    </div>
    <Router>
      <AnimatedSwitch 
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 1}}
        atActive={{ opacity: 1 }}
        className="switch-wrapper h-100"
      >
        <Route exact path="/" component={Login} />
        <Route exact path="/admin-board/:path?">
          <AdminBoard>
            <Switch>
              <AnimatedRoute exact path="/admin-board/user-register" component={UserRegister}/>
              <AnimatedRoute path="/admin-board/group-register" component={GroupRegister}/>
              <AnimatedRoute path="/admin-board/subject-register" component={SubjectRegister}/>
              <AnimatedRoute path="/admin-board/change-password" component={ChangePassword}/>
            </Switch>
          </AdminBoard>
        </Route>  
        <Route exact path="/teacher-board/:path?">
          <TeacherBoard>
            <Switch>
              {/* <Route exact path="/teacher-board/user-register" component={UserRegister}/>
              <Route exact path="/teacher-board/group-register" component={GroupRegister}/>
              <Route exact path="/teacher-board/subject-register" component={SubjectRegister}/> */}
              <AnimatedRoute path="/teacher-board/change-password" component={ChangePassword}/>
            </Switch>
          </TeacherBoard>
        </Route>  
        <Route exact path="/student-board/:path?">
          <StudentBoard>
            <Switch>
              {/* <Route exact path="/student-board/user-register" component={UserRegister}/>
              <Route exact path="/student-board/group-register" component={GroupRegister}/>
              <Route exact path="/student-board/subject-register" component={SubjectRegister}/> */}
              <AnimatedRoute path="/student-board/change-password" component={ChangePassword}/>
            </Switch>
          </StudentBoard>
        </Route>
      </AnimatedSwitch>
    </Router>
  </div>
  );
};
export default App;
