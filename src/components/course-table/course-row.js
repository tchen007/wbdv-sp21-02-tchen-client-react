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

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle,
            lastModified: day.toLocaleDateString(undefined, options),
        }
        updateCourse(newCourse);
    }
}

export default CourseRow