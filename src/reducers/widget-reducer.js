const initialState = {
    widgets: []
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets
            };
        case  "CREATE_WIDGET":
            return {
                widgets: [
                    ...state.widgets,
                    action.newWidget
                ]
            };
        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.widget.id) {
                        return action.widget
                    } else {
                        return widget
                    }
                })
            };
        case "DELETE_WIDGET":
            const statePostDel = {
                ...state,
                widgets: state.widgets.filter(widget =>
                    widget.id !== action.delWidgetId
                )
            };
            return statePostDel;
        default:
            return state;
    }
}

export default widgetReducer
    