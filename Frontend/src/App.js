
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

import Particles from "./Canvas";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './css/App.css';

const App = () => {
  return (
    <div className="container pg-cont">
      <div className="canvas">
        <Particles />
      </div>
      <Router>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
        </AnimatedSwitch>
      </Router>
    </div>
  );
};
export default App;




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
