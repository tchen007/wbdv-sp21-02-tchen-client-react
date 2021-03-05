// CourseCard is to be implemented as function

import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "./course-card.css"

const CourseCard = (
    {
        course,
        index,
        updateCourse,
        deleteCourse
    }
    ) => {
    const day = new Date();
    const options = {year: 'numeric', month: 'numeric', day: 'numeric' };
    const editorPath = "/courses/grid/edit/".concat(course._id)

    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(course.title)

    // Temp, best approach would to have associated, stored URI.
    // Field - upload photo (user), upload photo and generate URI, store URI string in database.
    const picturesSrc = ["https://www.drupal.org/files/project-images/bootstrap-stack.png",
        "https://miro.medium.com/max/285/1*QR2SBNwG75LyY5uwqWpN3A.png",
        "https://freeiconshop.com/wp-content/uploads/edd/html-flat.png",
        "https://www.pngitem.com/pimgs/m/520-5202823_nodejs-node-js-logo-png-transparent-png.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTLsZtEs4N7hlthpkaRUBwqcToenaNK7tpEg&usqp=CAU",
        "https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.jpg",
        "https://cdn.pixabay.com/photo/2019/08/19/07/45/dog-4415649__340.jpg"
    ]

    const saveCourse = () => {
        setEditing(false);
        if (newTitle === course.title) {return};
        const newCourse = {
            ...course,
            title: newTitle,
            lastModified: day.toLocaleDateString(undefined, options),
        }
        updateCourse(newCourse);
    }

    return (
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 my-2 card-group">
            <div className="card text-center">
                <img src={picturesSrc[index % 7]} className="card-img-top" alt="..."/>
                <div className="card-body d-flex flex-column">
                    { !editing &&
                        <Link to={editorPath}>
                            <h5 className="card-title text-truncate text-dark">{course.title}</h5>
                        </Link>
                    }
                    { editing &&
                    <input onChange={(event) => setNewTitle(event.target.value)}
                           value={newTitle}
                           className="form-control"/>
                    }
                    <p className="card-text">Some description about class.</p>
                    <Link to={editorPath} className="btn btn-primary text-truncate mt-auto mb-4">{course.title}</Link>
                    <div className="text-right mt-auto">
                        {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit fa-lg mr-2 text-primary"/>}
                        {editing && <i  onClick={saveCourse} className="fas fa-check fa-lg mr-2 text-success"/>}
                        {editing && <i onClick={() => deleteCourse(course._id)} className="fas fa-minus-circle fa-lg mx-2 text-danger"/>}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CourseCard