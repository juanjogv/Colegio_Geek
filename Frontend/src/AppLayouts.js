
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

import Particles from "./Canvas";
import Login from "./pages/Login";
import UserRegister from "./pages/UserRegister";
import GroupRegister from "./pages/GroupRegister";
import SubjectRegister from "./pages/SubjectRegister";
import StudentBoard from "./pages/StudentBoard";
import TeacherBoard from "./pages/TeacherBoard";
import AdminBoard from "./pages/AdminBoard";
import './css/App.scss';

const pages=[
  {
    exact:true,
    path:'/login',
    component:Login,
    layout:PublicLayout
  },
  {
    exact:true,
    path:'/dashboard',
    component:Dashboard,
    layout:AuthLayout
  }
];

const App = () => {
  return (
      // <Router history={history}>
      //   <Switch>
      //      {pages.map( (i, index) => {
      //          <Route key={index}
      //           exact={i.exact}
      //           path={i.path}
      //           component={i.component}
      //          />
      //       })
      //      }
      //   </Switch>
      // </Router>


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
          <Route exact path="/admin-board/:path?">
            <AdminBoard>
              <AnimatedSwitch>
                <Route exact path="/admin-board/user-register" component={UserRegister}/>
                <Route path="/admin-board/group-register" component={GroupRegister}/>
                <Route path="/admin-board/subject-register" component={SubjectRegister}/>
              </AnimatedSwitch>
            </AdminBoard>
          </Route>  
          <Route exact path="/teacher-board/:path?">
            <TeacherBoard>
              <AnimatedSwitch>
                {/* <Route exact path="/teacher-board/user-register" component={UserRegister}/>
                <Route exact path="/teacher-board/group-register" component={GroupRegister}/>
                <Route exact path="/teacher-board/subject-register" component={SubjectRegister}/> */}
              </AnimatedSwitch>
            </TeacherBoard>
          </Route>  
          <Route exact path="/student-board/:path?">
            <StudentBoard>
              <AnimatedSwitch>
                {/* <Route exact path="/student-board/user-register" component={UserRegister}/>
                <Route exact path="/student-board/group-register" component={GroupRegister}/>
                <Route exact path="/student-board/subject-register" component={SubjectRegister}/> */}
              </AnimatedSwitch>
            </StudentBoard>
          </Route>
        </AnimatedSwitch>
      </Router>
    </div>
  );
}

{/* 
 <Route exact path="/" component={Login} />
          <Route exact path="/student-board/" component={StudentBoard} />
          <Route exact path="/teacher-board/" component={TeacherBoard} />
          <Route exact path="/admin-board/" component={AdminBoard} />
          <Route path="/admin-board/register" component={UserRegister} />
          <Route path="/group-register" component={GroupRegister} />
          <Route path="/subject-register" component={SubjectRegister} />



*/}