import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {useParams} from "react-router-dom";
import lessonService from "../../services/lesson-service";
import EditableItem from "./editable-item";


const LessonTabs = (
    {
        moduleLessons = [],
        findLessonsForModule,
        createLesson,
        deleteLesson,
        updateLesson
    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();

    useEffect(() => {
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
            console.log(layout, courseId, moduleId, lessonId)
            // console.log(moduleLessons)
        }
    }, [moduleId])
    return (
        <div>
            <h2>Lessons {moduleLessons.length} {moduleId}</h2>
            <ul className="nav nav-tabs col-12 nav-justified">
                {
                    moduleLessons.map(lesson =>
                        <li className={`nav-item ${lesson._id === lessonId ? "active bg-primary": ""}`} key={lesson._id}>
                            <EditableItem
                                path={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                updateItem={updateLesson}
                                deleteItem={deleteLesson}
                                active={lesson._id === lessonId}
                                item={lesson}/>
                        </li>
                    )
                }
                <i onClick={() => createLesson(moduleId, moduleLessons.length)}
                       className="fas fa-plus fa-2x mx-5 mt-2 pb-2"/>
            </ul>
        </div>

    )
}

const stateToProps = (state) => {
    return {
        moduleLessons: state.lessonReducer.lessons
    }
}

// mapDispatchToProps returns Function OR Object
const dispatchToProps = (dispatch) => {
    return {
        findLessonsForModule: (moduleId) => {
            lessonService.findLessonsForModule(moduleId)
                .then(lessonsFromServer => dispatch({
                    type: "FIND_LESSONS_FOR_MODULE",
                    lessons: lessonsFromServer
                }))
                .then(console.log("lesson dispatch"))
        },
        createLesson: (moduleId, moduleLessonsLen) => {
            lessonService.createLesson(moduleId, {title: `New Lesson: ${moduleLessonsLen}` })
                .then((newLesson) =>
                    dispatch({
                        type: "CREATE_LESSON",
                        newLesson: newLesson
                    })
                )
        },
        deleteLesson: (lessonToDel) => {
            lessonService.deleteLesson(lessonToDel._id)
                .then((response) =>
                    dispatch({
                        type: "DELETE_LESSON",
                        lessonToDelId: lessonToDel._id
                    })
                )
        },
        updateLesson: (lesson) => {
            lessonService.updateLesson(lesson._id, lesson)
                .then(status =>
                    dispatch({
                        type: "UPDATE_LESSON",
                        lesson
                    })
                )
        }
    }
}

// Connect returns a function (it is a wrapper function)
export default connect(stateToProps, dispatchToProps)(LessonTabs)


