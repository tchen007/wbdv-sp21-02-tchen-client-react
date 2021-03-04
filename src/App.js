import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import CourseManager from "./components/course-manager/course-manager";
import CourseEditor from "./components/course-editor/course-editor"

function App() {
    return (
        <BrowserRouter>
            <Route path={"/courses"} component={CourseManager}/>
            <Route path={"/"} exact={true} component={CourseManager}/>
            <Route path={"/editor/:courseId"} exact={true}
                   render={(props) => <CourseEditor {...props}/>}/>
        </BrowserRouter>
    );
}

export default App;
