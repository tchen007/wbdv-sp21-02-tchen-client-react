const initialState = {
    modules: []
}

const moduleReducer = (state= initialState, action) => {
    switch (action.type) {
        case "FIND_MODULES_FOR_COURSE": {
            return {
                ...state,
                modules: action.modules
            }
        }
        case "CREATE_MODULE": {}
        case "UPDATE_MODULE": {}
        case "DELETE_MODULE": {}
        default:
            return state
    }
}

export default moduleReducer
