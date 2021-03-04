// FOR createModule() and findModulesForCourse():
// https://wbdv-generic-server.herokuapp.com/api/YOUR_NEUID/courses/COURSE_ID/modules
// Others https://wbdv-generic-server.herokuapp.com/api/YOUR_NEUID/modules/MODULE_ID

import {POST, PUT, DELETE, HEADER, MODULES_URL, COURSES_URL} from './services-constants'

// export const COURSES_URL = 'https://wbdv-generic-server.herokuapp.com/api/tchen007/courses' // /COURSE_ID/modules
// export const MODULES_URL = 'https://wbdv-generic-server.herokuapp.com/api/tchen007/modules' // /MODULE_ID

// creates a new module instance for the course whose ID is courseId
export const createModule = (courseId, module) => {
    return fetch(`${COURSES_URL}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(module),
        headers: HEADER
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

// retrieves all modules for course whose ID is courseId
export const findModulesForCourse = (courseId) => {
    return fetch(`${COURSES_URL}/${courseId}/modules`)
        .then(response => response.json())
        // .then(res => console.log(res))
        .catch(error => console.log(error))
}

// // retrieves one module whose ID is moduleId (optional)
// export const findModule = (moduleId) => {
//
// }

// updates one module whose ID is moduleId
export const updateModule = (moduleId, module) => {
    return fetch(`${MODULES_URL}/${moduleId}`, {
        method: PUT,
        body: JSON.stringify(module),
        headers: HEADER
    })
        .then(response => response.json())
        // Does it have a response?/ do we use it?
        .catch(error => console.log(error))
}

// removes module whose ID is moduleId
export const deleteModule = (moduleId) => {
    return fetch(`${MODULES_URL}/${moduleId}`, {
        method: DELETE
    })
        .then(response => response.json())
        // Does it have a response?/ do we use it?
        .catch(error => console.log(error))
}

export default {
    createModule, findModulesForCourse, updateModule, deleteModule
}