// const LESSON_URL = 'https://wbdv-generic-server.herokuapp.com/api/tchen007/lessons' // /LESSON_ID/topics
// const TOPICS_URL = 'https://wbdv-generic-server.herokuapp.com/api/tchen007/topics' // /Topic_ID

import {POST, PUT, DELETE, HEADER, TOPICS_URL, LESSONS_URL} from './services-constants'

// creates a new Topic instance for the lesson whose ID is lessonId
export const createTopic = (lessonId, topic) => {
    return fetch(`${LESSONS_URL}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: HEADER
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

// retrieves all Topics for lesson whose ID is lessonId
export const findTopicsForLesson = (lessonId) => {
    return fetch(`${LESSONS_URL}/${lessonId}/topics`)
        .then(response => response.json())
        .catch(error => console.log(error))
}


// retrieves one Topic whose ID is topicId (optional)
// export const findTopic = () => {
// }

// updates one Topic whose ID is TopicId
export const updateTopic = (topicId, topic) => {
    return fetch(`${TOPICS_URL}/${topicId}`, {
        method: PUT,
        body: JSON.stringify(topic),
        headers: HEADER
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}


// removes Topic whose ID is topicId
export const deleteTopic = (topicId) => {
    return fetch(`${TOPICS_URL}/${topicId}`, {
        method: DELETE
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

export default {
    createTopic, findTopicsForLesson, updateTopic, deleteTopic
}










