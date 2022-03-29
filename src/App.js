import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./navbar";
import SignUp from "./signup";
import Login from "./Login";
import Countries from "./countries";
import Courses from "./courses";
import Events from "./Events";
import Exams from "./Exams";
import Talk_to_counsellor from "./Talk_to_counsellor";
import Store from "./store";
import Universities from "./universities";

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/signUp">
                 <SignUp />
                 </Route>
                 <Route exact path="/Login">
                <Login />
              </Route>
              <Route exact path="/store">
                <Store />
              </Route>
              <Route exact path="/courses">
                <Courses />
              </Route>
              <Route exact path="/countries">
                <Countries />
              </Route>
              <Route exact path="/Talk_to_counsellor">
                <Talk_to_counsellor />
              </Route>
              <Route exact path="/universities">
                <Universities />
              </Route>
              <Route exact path="/Events">
                <Events />
              </Route>
              <Route exact path="/Exams">
                <Exams />
              </Route>
            </Switch>
          
          </div>
      
    </div>
    </Router>
  );
}

export default App;
