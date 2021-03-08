const initialState = {
    topics: []
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_TOPICS_FOR_LESSON":
            return {
                ...state,
                topics: action.topics
            };
        case  "CREATE_TOPIC":
            return {
                topics: [
                    ...state.topics,
                    action.newTopic
                ]
            };
        case "UPDATE_TOPIC":
            return {
                ...state,
                topics: state.topics.map(topic => {
                    if (topic._id === action.topic._id) {
                        return action.topic
                    } else {
                        return topic
                    }
                })
            };
        case "DELETE_TOPIC":
            const statePostDel = {
                ...state,
                topics: state.topics.filter(topic =>
                    topic._id !== action.topicToDelId
                )
            };
            return statePostDel;
        default:
            return state;
    }
}

export default topicReducer
