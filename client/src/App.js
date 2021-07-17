import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Courses } from "./components/Courses";
import { CourseDetail } from "./components/CourseDetail";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Redirect exact path="/" to="/courses" />
        <Route path="/courses/:id" component={CourseDetail} />
        <Route path="/courses" component={Courses} />
      </Switch>
    </Router>
  );
}

export default App;
