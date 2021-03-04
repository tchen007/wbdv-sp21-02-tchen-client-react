// Separated out constants that are used by services.

export const COURSES_URL = 'https://wbdv-generic-server.herokuapp.com/api/tchen007/courses' // /COURSE_ID/modules
export const MODULES_URL = 'https://wbdv-generic-server.herokuapp.com/api/tchen007/modules' // /MODULE_ID/lessons
export const LESSONS_URL = 'https://wbdv-generic-server.herokuapp.com/api/tchen007/lessons' // /LESSON_ID
export const TOPICS_URL = 'https://wbdv-generic-server.herokuapp.com/api/tchen007/topics' // /Topic_ID

export const POST = 'POST'
export const PUT = 'PUT'
export const DELETE = 'DELETE'
export const HEADER = {'content-type': 'application/json'}

export default {
    MODULES_URL, LESSONS_URL, COURSES_URL, TOPICS_URL, POST, DELETE, HEADER
}