const initialState = {
    lessons: []
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_LESSONS_FOR_MODULE":
            return {
                ...state,
                lessons: action.lessons
            };
        case  "CREATE_LESSON":
            return {
                lessons: [
                    ...state.lessons,
                    action.newLesson
                ]
            };
        case "UPDATE_LESSON":
            return {
                ...state,
                lessons: state.lessons.map(lesson => {
                    if (lesson._id === action.lesson._id) {
                        return action.lesson
                    } else {
                        return lesson
                    }
                })
            };
        case "DELETE_LESSON":
            const statePostDel = {
                ...state,
                lessons: state.lessons.filter(lesson =>
                    lesson._id !== action.lessonToDelId
                )
            };
            return statePostDel;
        default:
            return state;
    }
}

export default lessonReducer
