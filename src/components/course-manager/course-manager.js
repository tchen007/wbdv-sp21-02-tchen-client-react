import React, {useState} from "react";
import $ from 'jquery';
import CourseService from "../../services/course-service"
import CourseTable from "../course-table/course-table";
// import CourseGrid from "./course-grid/course-grid";
import {Link, Route} from "react-router-dom";
import './course-manager.css';

export default class CourseManager extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.day = new Date();
        this.options = {year: 'numeric', month: 'numeric', day: 'numeric' };
        this.state = {
            courses: []
        };
    }


    // Study notes: Methods are called in the following order when instance of component is created / inserted into Dom
    // constructor, getDervivedStateFromProps(), render(), componentDidMount()
    componentDidMount = () =>
        this.courseService.findAllCourses()
            .then(courses => {
                this.setState({courses: courses});
            });

    addCourse = () => {
        let $courseTitleFld = document.getElementById('courseTitleFld')
        const newCourse = {
            title: $courseTitleFld.value,
            owner: "Tiffany",
            lastModified: this.day.toLocaleDateString(undefined, this.options),
        }
        this.courseService.createCourse(newCourse)
            .then(courseServerResponse => {
                this.setState(
                    // Correct - concat returns new array
                    // {courses: this.state.courses.concat(courseServerResponse)});
                    // ES6 spreader way and could also do prevState approach such as in deleteCourse
                    {courses: [...this.state.courses, courseServerResponse]})
                $courseTitleFld.value = "";
            });
    }

    deleteCourse = (courseId) => {
        this.courseService.deleteCourse(courseId)
            .then(() => {
                this.setState((prevState) => (
                    {courses: prevState.courses.filter(deletedC => deletedC._id !== courseId)}
                    ));
                console.log(this.state.courses)
                }
            );
    };

    updateCourse = (course) => {};



    render() {
        return(
            <div>
                {/*Navigation Bar*/}
                <nav className="bg-primary navbar-dark custom-control-inline col-12">
                    <div className="col-lg-3 col-auto m-3 custom-control-inline">
                        <button className="navbar-toggler my-3" type="button" data-toggle="dropdown" id="navbarMenuDropdown"
                                aria-expanded="false" aria-haspopup="true">
                            <i className="navbar-toggler-icon"></i>
                        </button>
                        <div className="navbar-brand font-weight-bold d-none d-lg-block m-3" >Course Manager</div>
                        <div className="dropdown-menu" aria-labelledby="navbarMenuDropdown">
                            {/*Reformat to a Route or Link to=*/}
                            <a className="dropdown-item" href="../index.html">Home</a>
                            <a className="dropdown-item" href="../login/login.template.client.html">Login</a>
                            <a className="dropdown-item" href="../profile/profile.template.client.html">Profile</a>
                        </div>
                    </div>
                    <div className="col-lg-10 my-3 custom-control-inline float-right">
                        <input
                            onChange={(event) => this.newTitle = event.target.value}
                            className="form-control font-italic my-3 col-10" id="courseTitleFld"
                            type="text" placeholder="New Course Title"/>
                        <button className="btn btn-danger rounded-circle m-3">
                            <i onClick={() => this.addCourse()} className="fas fa-plus"/>
                        </button>
                    </div>
                </nav>

                <CourseTable
                    updateCourse={this.updateCourse}
                    deleteCourse={this.deleteCourse}
                    courses={this.state.courses}/>

                {/*Button at Bottom Right*/}
                <div className="col-12">
                    <button className="btn btn-danger rounded-circle wbdv-bottom-right" type="submit">
                        <span className="fas fa-plus fa-2x"></span>
                    </button>
                </div>
            </div>
        );
    }
}
