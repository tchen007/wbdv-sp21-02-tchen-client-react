import {POST, PUT, DELETE, HEADER, LESSONS_URL, MODULES_URL} from './services-constants'

// const MODULES_URL = 'https://wbdv-generic-server.herokuapp.com/api/tchen007/modules' // /MODULE_ID/lessons
// const LESSONS_URL = 'https://wbdv-generic-server.herokuapp.com/api/tchen007/lessons' // /LESSON_ID

// creates a new lesson instance for the module whose ID is moduleId
export const createLesson = (moduleId, lesson) => {
}

// retrieves all lessons for course whose ID is moduleId
export const findLessonsForModule = (moduleId) => {

}

// retrieves one lesson whose ID is lessonId (optional)
export const findLesson = (lessonId) => {

}

// updates one lesson whose ID is lessonId
export const updateLesson = (lessonId, lesson) => {}

// removes lesson whose ID is lessonId
export const deleteLesson = (lessonId) => {}