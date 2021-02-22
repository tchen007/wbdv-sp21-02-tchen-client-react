// Renders array of courses as a grid of cards
// CourseCard - Implemented as function

import React from 'react'
import {Link} from "react-router-dom";
import CourseCard from "./course-card/course-card";

const CourseGrid = (
    {
        courses,
        updateCourse,
        deleteCourse
    }
    ) => {
    return (
        <div className="col-12">
            <div className="row m-3">
                <h5 className="col-4 d-none d-md-block">Recent Documents</h5>
                <h5 className="col-4 d-none d-md-block text-center">Owned by me
                    <i className="fas fa-caret-down ml-2 fa-lg fa-fw"/>
                </h5>
                <span className="text-right col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <i className="fas fa-folder fa-lg fa-fw mr-2"/>
                    <i className="fas fa-sort-alpha-up-alt fa-lg fa-fw mr-2"/>
                     <Link to="/courses/table">
                        <i className="fas fa-list fa-lg fa-fw mr-2 text-dark"/>
                     </Link>
                </span>
            </div>
            <div className="row mx-3">
                {courses.map((c, i) =>
                    <CourseCard
                        key={c._id}
                        course={c}
                        index={i}
                        updateCourse={updateCourse}
                        deleteCourse={deleteCourse}
                    />)
                }
            </div>
        </div>
    )
}

export default CourseGrid