import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Context } from "./Context";
import { Header } from "./components/Header";
import { Courses } from "./components/Courses";
import { CourseDetail } from "./components/CourseDetail";
import { UserSignIn } from "./components/UserSignIn";
import { UserSignUp } from "./components/UserSignUp";

function App() {
  return (
    <Router>
      <Context.Provider value="context">
        <Header />
        <Switch>
          <Redirect exact path="/" to="/courses" />
          <Route path="/courses/:id" component={CourseDetail} />
          <Route path="/courses" component={Courses} />
          <Route path="/signin" component={UserSignIn} />
          <Route path="/signup" component={UserSignUp} />
        </Switch>
      </Context.Provider>
    </Router>
  );
}

export default App;
