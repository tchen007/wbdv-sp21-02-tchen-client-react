import {POST, PUT, DELETE, HEADER, BASE_URL, TOPICS_PATH, WIDGETS_PATH} from './services-constants'

export const createWidget = (topicId, widget) => {
    return fetch(`${BASE_URL}${TOPICS_PATH}/${topicId}${WIDGETS_PATH}`, {
        method: POST,
        body: JSON.stringify(widget),
        headers: HEADER
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

export const findWidgetsForTopic = (topicId) => {
    return fetch(`${BASE_URL}${TOPICS_PATH}/${topicId}${WIDGETS_PATH}`)
        .then(response => response.json())
        .catch(error => console.log(error))
}

// export const findAllWidgets() OPTIONAL
// export const findWidgetById(widgetId) OPTIONAL

export const updateWidget = (widgetId, topic) => {
    return fetch(`${BASE_URL}${WIDGETS_PATH}/${widgetId}`, {
        method: PUT,
        body: JSON.stringify(topic),
        headers: HEADER
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}


export const deleteWidget = (widgetId) => {
    return fetch(`${BASE_URL}${WIDGETS_PATH}/${widgetId}`, {
        method: DELETE
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

export default {
    createWidget, findWidgetsForTopic, updateWidget, deleteWidget
}