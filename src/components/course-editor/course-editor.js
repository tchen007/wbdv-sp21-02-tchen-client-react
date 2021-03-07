// History is a unique react router object
// map to /courses/:layout/edit/:courseId
// Displays the modules, lessons, and topics for a course whose ID is courseId

import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import CourseService from "../../services/course-service";
import LessonTabs from "./lesson-tabs";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer
})

const store = createStore(reducer)

const CourseEditor = (
        history
    ) => {
    const [courseTitle, setTitle] = useState("")
    const {layout, courseId} = useParams()
    useEffect(() => {
        const cs = new CourseService()
        // setTitle(JSON.stringify(cs.findCourseById(courseId).title))
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
                    <button className="btn btn-outline-light rounded-circle my-3 ml-3 mr-5"
                        onClick={() => history.goBack()}>
                        <i className="fas fa-arrow-left"/>
                    </button>
                    <div className="navbar-brand font-weight-bold my-3 ml-3" >{`${courseTitle}`}</div>
                    {/*<div className="navbar-brand font-weight-bold text-truncate my-3 ml-3 ml-lg-0 ml-xl-0">Course Name</div>*/}
                </nav>
            </div>
            <div className="col-12 mx-2 mt-3 custom-control-inline">
                <section className="ml-5 col-3">
                    <ModuleList/>
                </section>
                <section className="ml-5 col-8">
                    <LessonTabs/>
                    <h1 className="float-right">RAWR</h1>
                </section>
            </div>

        </Provider>
    )
}
export default CourseEditor