import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import CourseManager from "./components/course-manager/course-manager";
import CourseEditor from "./components/course-editor/course-editor"
import CourseGrid from "./components/course-grid/course-grid";
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";

function App() {
    return (
        <BrowserRouter>
            <Route path={["/", "/courses", "/courses/:layout"]} exact={true}
                   component={CourseManager}/>
            <Route path={["/courses/:layout/edit/:courseId",
                "/courses/:layout/edit/:courseId/modules/:moduleId",
                "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"
            ]}
               exact={true}
               render={(props) => <CourseEditor {...props}/>}/>
            <Route path={["/courses/:courseId/quizzes"
            ]}
                   exact={true}
                   render={(props) => <QuizzesList {...props}/>}/>
            <Route path={["/courses/:courseId/quizzes/:quizId"
            ]}
                   exact={true}
                   render={(props) => <Quiz {...props}/>}/>
        </BrowserRouter>
    );
}

export default App;
