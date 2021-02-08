
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatedSwitch, AnimatedRoute } from "react-router-transition";

import Particles from "./Canvas";
import Login from "./pages/Login";
import Profile from './components/profile'
import AdminBoard from "./pages/AdminBoard";
import UserRegister from "./pages/UserRegister";
import GroupRegister from "./pages/GroupRegister";
import EnrollStudents from "./pages/EnrollStudents";
import ScoreEstudents from "./pages/ScoreStudents";
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
          atLeave={{ opacity: 1 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper h-100"
        >
          <Route exact path="/" component={Login} />
          <Route exact path="/admin-board/:path?">
            <AdminBoard>
              <AnimatedRoute exact path="/admin-board/" component={Profile}
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 1 }}
                atActive={{ opacity: 1 }}
              />
              <AnimatedRoute exact path="/admin-board/user-register" component={UserRegister}
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 1 }}
                atActive={{ opacity: 1 }}
              />
              <AnimatedRoute path="/admin-board/group-register" component={GroupRegister}
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 1 }}
                atActive={{ opacity: 1 }}
              />
              <AnimatedRoute path="/admin-board/subject-register" component={SubjectRegister}
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 1 }}
                atActive={{ opacity: 1 }}
              />
              <AnimatedRoute path="/admin-board/change-password" component={ChangePassword}
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 1 }}
                atActive={{ opacity: 1 }}
              />
              <AnimatedRoute path="/admin-board/enroll-students" component={EnrollStudents}
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 1 }}
                atActive={{ opacity: 1 }}
              />
              <AnimatedRoute path="/admin-board/enroll-students" component={EnrollStudents}
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 1 }}
                atActive={{ opacity: 1 }}
              />
              <AnimatedRoute path="/admin-board/score/" component={ScoreEstudents}
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 1 }}
                atActive={{ opacity: 1 }}
              />
            </AdminBoard>
          </Route>
          <Route exact path="/teacher-board/:path?">
            <TeacherBoard>
              <AnimatedRoute exact path="/teacher-board/" component={Profile}
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 1 }}
                atActive={{ opacity: 1 }}
              />
              {/* <Route exact path="/teacher-board/user-register" component={UserRegister}/>
              <Route exact path="/teacher-board/group-register" component={GroupRegister}/>
              <Route exact path="/teacher-board/subject-register" component={SubjectRegister}/> */}
              <Route path="/teacher-board/change-password/" component={ChangePassword} />
            </TeacherBoard>
          </Route>
          <Route exact path="/student-board/:path?">
            <StudentBoard>
              <AnimatedRoute exact path="/student-board/" component={Profile}
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 1 }}
                atActive={{ opacity: 1 }}
              />
              {/* <Route exact path="/student-board/user-register" component={UserRegister}/>
              <Route exact path="/student-board/group-register" component={GroupRegister}/>
              <Route exact path="/student-board/subject-register" component={SubjectRegister}/> */}
              <Route path="/student-board/change-password/" component={ChangePassword} />
            </StudentBoard>
          </Route>
        </AnimatedSwitch>
      </Router>
    </div>
  );
};
export default App;
