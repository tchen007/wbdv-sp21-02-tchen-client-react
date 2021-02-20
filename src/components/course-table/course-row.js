// Row of a single course, used in course-table
import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
    {
        course,
        title,
        lastModified,
        owner,
        updateCourse,
        deleteCourse
    }) => {

    const day = new Date();
    const options = {year: 'numeric', month: 'numeric', day: 'numeric' };

    // useState() returns state and function that updates it
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle,
            lastModified: day.toLocaleDateString(undefined, options),
        }
        updateCourse(newCourse);
    }

    return (
        <tr>
            {/*Title column*/}
            <td>
                { !editing &&
                    <div>
                        <i className="fas fa-file fa-lg fa-fw mr-1 text-primary"/>
                        {title}
                    </div>
                }
                {/*// <Link to="/courses/editor">*/}
                {/*//         Testing*/}
                {/*//     </Link>*/}
                {/*// }*/}

                { editing &&
                <input onChange={(event) => setNewTitle(event.target.value)}
                    value={newTitle}
                    className="form-control"/>
                }
            </td>
            <td className="d-none d-sm-table-cell">{owner}</td>
            <td className="d-none d-md-table-cell">{lastModified}</td>
            {/*Icons for row, delete and edit only show when editing is true*/}
            <td className="text-right">
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit fa-lg mr-2 text-primary"/>}
                {editing && <i onClick={() => saveCourse()} className="fas fa-check fa-lg mr-2 text-success"/>}
                {editing && <i onClick={() => deleteCourse(course._id)} className="fas fa-minus-circle fa-lg mx-2 text-danger"/>}
            </td>
        </tr>



    )
}

export default CourseRow