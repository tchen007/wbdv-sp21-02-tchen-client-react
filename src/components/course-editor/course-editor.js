// History is a unique react router object
// map to /courses/:layout/edit/:courseId
// Displays the modules, lessons, and topics for a course whose ID is courseId

import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import CourseService from "../../services/course-service";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";


const reducer = combineReducers({
    moduleReducer,
    lessonReducer,
    topicReducer
})

const store = createStore(reducer)

const CourseEditor = (
    ) => {
    const [courseTitle, setTitle] = useState("")
    const {layout, courseId} = useParams()
    useEffect(() => {
        const cs = new CourseService()
        cs.findCourseById(courseId)
            .then((response) => {
                setTitle(response.title)
            })
    })

    return (
        <Provider store={store}>
            {/*Navigation Bar*/}
            <div className="row">
                <nav className="bg-primary navbar-dark custom-control-inline col-12 p-3">
                    <Link className="btn btn-outline-light rounded-circle my-3 ml-3 mr-5"
                        to={`/courses/${layout}`}>
                        <i className="fas fa-arrow-left"/>
                    </Link>
                    <div className="navbar-brand font-weight-bold my-3 ml-3" >{`${courseTitle}`}</div>
                </nav>
            </div>
            <div className="col-12 mx-2 mt-3 custom-control-inline">
                <section className="ml-2 col-3">
                    <ModuleList/>
                </section>
                <section className="ml-2 col-9">
                    <LessonTabs/>
                    <TopicPills/>
                </section>
            </div>

        </Provider>
    )
}
export default CourseEditor