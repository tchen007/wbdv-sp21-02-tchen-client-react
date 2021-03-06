import {POST, PUT, DELETE, HEADER, LESSONS_URL, MODULES_URL, COURSES_URL} from './services-constants'

// const MODULES_URL = 'https://wbdv-generic-server.herokuapp.com/api/tchen007/modules' // /MODULE_ID/lessons
// const LESSONS_URL = 'https://wbdv-generic-server.herokuapp.com/api/tchen007/lessons' // /LESSON_ID

// creates a new lesson instance for the module whose ID is moduleId
export const createLesson = (moduleId, lesson) => {
    return fetch(`${MODULES_URL}/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: HEADER
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

// retrieves all lessons for course whose ID is moduleId
export const findLessonsForModule = (moduleId) => {
    return fetch(`${MODULES_URL}/${moduleId}/lessons`)
        .then(response => response.json())
        .catch(error => console.log(error))
}

// retrieves one lesson whose ID is lessonId (optional)
// export const findLesson = (lessonId) => {
//
// }

// updates one lesson whose ID is lessonId
export const updateLesson = (lessonId, lesson) => {
    return fetch(`${LESSONS_URL}/${lessonId}`, {
        method: PUT,
        body: JSON.stringify(lesson),
        headers: HEADER
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

// removes lesson whose ID is lessonId
export const deleteLesson = (lessonId) => {
    return fetch(`${LESSONS_URL}/${lessonId}`, {
        method: DELETE
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

export default {
    createLesson, findLessonsForModule, updateLesson, deleteLesson
}