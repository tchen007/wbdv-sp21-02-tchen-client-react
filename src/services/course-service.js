// CourseService - service client for data communications with server
class CourseService {
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
            .catch(() => throw new Error('Failed to create new course'));
    }
        // }).then(function (response) {
        //     return response.json();
        //     .catch(function () {
        //         throw new Error('Failed to create new course');
        // });
    // }

    findAllCourses() {
        return fetch(this._url)
            .then(response => response.json())
            .catch(() => throw new Error('Could not retrieve courses'));
    }
        // .then(function (response) {
            //     return response.json();
            // })
            // .catch(function () {
            //     throw new Error('Could retrieve courses');
            // });
    // }

    findCourseById(id) {
        return fetch(`${this._url}/${id}`)
            .then(response => response.json())
            .catch(() => throw new Error('Could not retrieve course'));
    }
        // .then(function (response) {
            //     return response.json();
            // })
            // .catch(function () {
            //     throw new Error('Could not retrieve user info');
            // });
    // }

    updateCourse(id, course) {
        return fetch(`${this._url}/${id}`, {
            method: "PUT",
            headers: this._header,
            body: JSON.stringify(course)
        })
            .catch(() => throw new Error('Could not retrieve course'));
    }

    // .catch(function () {
    //             throw new Error('Failed to update user');
    //         });
    // }

    deleteCourse(id) {
        return fetch(`${this._url}/${id}`, {
            method: "DELETE"
        })
            .catch(() => throw new Error('Failed to delete course'));
    }
    // .catch(function () {
    //             throw new Error('Failed to delete course');
    //         });
    // }
}