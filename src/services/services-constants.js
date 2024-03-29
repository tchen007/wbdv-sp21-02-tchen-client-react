// Separated out constants that are used by services.

export const COURSES_URL = 'https://wbdv-generic-server.herokuapp.com/api/tchen007/courses' // /COURSE_ID/modules
export const MODULES_URL = 'https://wbdv-generic-server.herokuapp.com/api/tchen007/modules' // /MODULE_ID/lessons
export const LESSONS_URL = 'https://wbdv-generic-server.herokuapp.com/api/tchen007/lessons' // /LESSON_ID
export const TOPICS_URL = 'https://wbdv-generic-server.herokuapp.com/api/tchen007/topics' // /Topic_ID

// Constants for self-hosted java server
// Future to dos: Extract out and set as env variables
// export const NODE_BASE_URL = 'http://localhost:4000/api'
export const NODE_BASE_URL = 'http://wbdv-lms-server-node.herokuapp.com/api'
export const BASE_URL = 'http://webdev-lms.herokuapp.com/api'
// export const BASE_URL = 'http://localhost:8080/api'
export const TOPICS_PATH = '/topics'
export const WIDGETS_PATH = '/widgets'
export const QUIZZES_PATH = '/quizzes'
export const QUESTIONS_PATH = '/questions'

export const POST = 'POST'
export const PUT = 'PUT'
export const DELETE = 'DELETE'
export const HEADER = {'content-type': 'application/json'}

export default {
    MODULES_URL, LESSONS_URL, COURSES_URL, TOPICS_URL,
    PUT, POST, DELETE, HEADER,
    NODE_BASE_URL, BASE_URL, TOPICS_PATH, WIDGETS_PATH, QUIZZES_PATH, QUESTIONS_PATH
}