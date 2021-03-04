import React, {useState} from "react";
import CourseService from "../../services/course-service"
import CourseTable from "../course-table/course-table";
import {Switch, Route, Redirect, Link} from "react-router-dom";
import './course-manager.css';
import CourseGrid from "../course-grid/course-grid";

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
        let $courseTitleFld = document.getElementById('courseTitleFld');
        if ($courseTitleFld.value.trim().length < 1) {
            return
        };
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

    updateCourse = (updatedCourse) => {
        console.log(updatedCourse);
        this.courseService.updateCourse(updatedCourse._id, updatedCourse)
            .then(() => {
                this.setState((prevState) => (
                    {courses: prevState.courses.map(
                            (c) => c._id === updatedCourse._id ? updatedCourse : c)
                    }
                ));
                console.log(this.state);
            });
    };

    render() {
        return(
            <div className="row">
                {/*Navigation Bar*/}
                <nav className="bg-primary navbar-dark custom-control-inline col-12">
                    <div className="col-lg-3 col-auto m-3 custom-control-inline">
                        <button className="navbar-toggler my-3" type="button" data-toggle="dropdown" id="navbarMenuDropdown"
                                aria-expanded="false" aria-haspopup="true">
                            <i className="navbar-toggler-icon"/>
                        </button>
                        <div className="navbar-brand font-weight-bold d-none d-lg-block my-3 ml-5" >Course Manager</div>
                        <div className="dropdown-menu" aria-labelledby="navbarMenuDropdown">
                            <Link to="/courses/table" className="dropdown-item">Courses: Table View</Link>
                            <Link to="/courses/grid" className="dropdown-item">Courses: Grid View</Link>
                        </div>
                    </div>
                    <div className="col-lg-10 col-sm-11 my-3 ml-3 custom-control-inline">
                        <input
                            onChange={(event) => this.newTitle = event.target.value}
                            className="form-control font-italic my-3 col-9" id="courseTitleFld"
                            type="text" placeholder="New Course Title"/>
                        <button onClick={() => this.addCourse()} className="btn btn-danger rounded-circle m-3">
                            <i className="fas fa-plus"/>
                        </button>
                    </div>
                </nav>
                <Switch>
                    <Route path={["/", "/courses", "/courses/table"]} exact={true}>
                        <CourseTable
                            updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>
                    </Route>
                    <Route path="/courses/grid" exact={true}>
                        <CourseGrid
                            updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}
                        />
                    </Route>
                    <Redirect from="*" to="/"/>
                </Switch>

                {/*Button at Bottom Right*/}
                <div className="row col-12">
                    <button onClick={() => this.addCourse()} className="btn btn-danger rounded-circle wbdv-bottom-right" type="submit">
                        <i className="fas fa-plus fa-2x"/>
                    </button>
                </div>
            </div>
        );
    }
}
