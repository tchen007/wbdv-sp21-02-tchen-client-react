const initialState = {
    modules: []
}

const moduleReducer = (state= initialState, action) => {
    switch (action.type) {
        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state,
                modules: action.modules
            }
        case "CREATE_MODULE":
            const newState = {
                // ...state,
                modules: [
                    ...state.modules,
                    action.newModule
                ]
            }
            return newState
        // case "UPDATE_MODULE": return state
        // case "DELETE_MODULE": return state
        default:
            return state
    }
}

export default moduleReducer
