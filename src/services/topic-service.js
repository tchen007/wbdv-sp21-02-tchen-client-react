// const LESSON_URL = 'https://wbdv-generic-server.herokuapp.com/api/tchen007/lessons' // /LESSON_ID/topics
// const TOPICS_URL = 'https://wbdv-generic-server.herokuapp.com/api/tchen007/topics' // /Topic_ID

import {POST, PUT, DELETE, HEADER, TOPICS_URL, LESSONS_URL} from './services-constants'

// creates a new Topic instance for the lesson whose ID is lessonId
export const createTopic = (lessonId, topic) => {
}

// retrieves all Topics for lesson whose ID is lessonId
export const findTopicsForLesson = (lessonId) => {

}

// retrieves one Topic whose ID is topicId (optional)
export const findTopic = () => {

}

// updates one Topic whose ID is TopicId
export const updateTopic = (topicId, topic) => {}

// removes Topic whose ID is topicId
export const deleteTopic = (topicId) => {}