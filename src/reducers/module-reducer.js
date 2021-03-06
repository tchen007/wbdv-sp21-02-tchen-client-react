const initialState = {
    modules: []
}

const moduleReducer = (state= initialState, action) => {
    switch (action.type) {
        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state,
                modules: action.modules
            };
        case "CREATE_MODULE":
            return {
                modules: [
                    ...state.modules,
                    action.newModule
                ]
            };
        case "UPDATE_MODULE":
            return {
                ...state,
                modules: state.modules.map(module => {
                    if(module._id === action.module._id) {
                        return action.module
                    } else {
                        return module
                    }
                })
            }
        // case "DELETE_MODULE":
        //     return {
        //         ...state,
        //         modules: state.modules.filter(module => {
        //             if(module._id !== action.moduleToDelId) {
        //                 return true
        //             } else {
        //                 return false
        //             }
        //         })
        //     }
        case "DELETE_MODULE":
            const statePostDel = {
                ...state,
                modules: state.modules.filter(module =>
                    module._id !== action.moduleToDelId
                )
            };
            return statePostDel;
        default:
            return state;
    }
}

export default moduleReducer
