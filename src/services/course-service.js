// CourseService - service client for data communications with server
// No handling for a non-200 response.

export default class CourseService {
    constructor() {
        this._url = "https://wbdv-generic-server.herokuapp.com/api/tchen007/courses";
        this._header = {'content-type': 'application/json'}
    }

    createCourse(course) {
        return fetch(this._url, {
            method: "POST",
            headers: this._header,
            body: JSON.stringify(course)
        })
            .then(response => response.json())
            .catch(error => console.log(error))

    }

    findAllCourses() {
        return fetch(this._url)
            .then(response => response.json())
            .catch(error => console.log(error))
    }

    findCourseById(id) {
        return fetch(`${this._url}/${id}`)
            .then(response => response.json())
            .catch(error => console.log(error))
    }

    updateCourse(id, course) {
        return fetch(`${this._url}/${id}`, {
            method: "PUT",
            headers: this._header,
            body: JSON.stringify(course)
        })
            .catch(error => console.log(error))
    }

    deleteCourse(id) {
        return fetch(`${this._url}/${id}`, {
            method: "DELETE"
        })
            .catch(error => console.log(error))
    }
}