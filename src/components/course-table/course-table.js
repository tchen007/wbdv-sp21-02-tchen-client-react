// Renders an array of courses as a table - course/row
// In safari, table is a bit messed up with the mx-4 due to padding
// Fix: div with col-12 and no mx-4 but makes the table flushed left & right

import React from 'react';
import {Link} from "react-router-dom";
import CourseRow from "./course-row"
import "./course-table.css"

export default class CourseTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table className="table mx-4">
                <thead>
                    <tr className="border-3">
                        <th className="wbdv-table-width-title">Title</th>
                        <th className="wbdv-table-width-other d-none d-sm-table-cell">Quizzes</th>
                        <th className="wbdv-table-width-other d-none d-sm-table-cell">Owned by</th>
                        <th className="wbdv-table-width-other d-none d-md-table-cell">Last modified</th>
                        <th className="wbdv-table-width-other text-right">
                            <i className="fas fa-folder fa-lg fa-fw mr-2"/>
                            <i className="fas fa-sort-alpha-up-alt fa-lg fa-fw mr-2"/>
                            <Link to="/courses/grid">
                                <i className="fas fa-th fa-lg fa-fw mr-2 text-dark"/>
                            </Link>
                        </th>

                    </tr>
                </thead>
                <tbody>
                { this.props.courses.map(course =>
                    <CourseRow
                        key={course._id}
                        course={course}
                        title={course.title}
                        lastModified={course.lastModified}
                        owner={course.owner}
                        deleteCourse={this.props.deleteCourse}
                        updateCourse={this.props.updateCourse}
                    />)
                }
                </tbody>
            </table>
        )
    }

}