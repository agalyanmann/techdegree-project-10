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
        <Route path="/courses" component={Courses} />
        <Route path="/:id" component={CourseDetail} />
      </Switch>
    </Router>
  );
}

export default App;
