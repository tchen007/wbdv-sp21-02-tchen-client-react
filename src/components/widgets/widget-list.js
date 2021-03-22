import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import widgetService from "../../services/widget-service";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";

const WidgetList = (
    {
        topicWidgets = [],
        findWidgetsForTopic,
        createWidget,
        deleteWidget,
        updateWidget,
    }) => {
    const {topicId} = useParams();
    const [editingWidget, setEditingWidget] = useState([]);

    useEffect(() => {
        findWidgetsForTopic(topicId);
    }, [topicId])

    const renderWidgetType = (w) => {
        switch (w.type) {
            case "HEADING":
                return <HeadingWidget
                    widget={w}
                    updateWidget={updateWidget}
                    deleteWidget={deleteWidget}
                    setEditingWidget={setEditingWidget}
                    editingWidget={editingWidget}
                    isEditing={editingWidget.includes(w.id)}
                >
                </HeadingWidget>
            case "PARAGRAPH":
                return <ParagraphWidget
                    widget={w}
                    updateWidget={updateWidget}
                    deleteWidget={deleteWidget}
                    updateWidget={updateWidget}
                    deleteWidget={deleteWidget}
                    setEditingWidget={setEditingWidget}
                    editingWidget={editingWidget}
                    isEditing={editingWidget.includes(w.id)}
                >
                </ParagraphWidget>
        }
    }

    return (
        <div className="mt-4">
            <h1>
                Widget List {topicWidgets.length}
                {JSON.stringify(topicWidgets)}
            </h1>
            {topicWidgets.length > 0 &&
                <ul className="list-group">
                    {
                        topicWidgets.map(widget =>
                        <li className="list-group-item mr-5" key={widget.id}>
                            {
                                renderWidgetType(widget)
                            }
                        </li>
                    )
                    }
                </ul>
            }
            <i onClick={() => createWidget(topicId, topicWidgets.length)}
               className="fas fa-plus fa-2x mx-3 mr-5 pr-3 pb-2 mt-2 float-right"/>
        </div>
    )
}

const stateToProps = (state) => {
    return {
        topicWidgets: state.widgetReducer.widgets
    }
}

const dispatchToProps = (dispatch) => {
    return {
        findWidgetsForTopic: (topicId) => {
            widgetService.findWidgetsForTopic(topicId)
                .then(widgetsFromServer => dispatch({
                    type: "FIND_WIDGETS_FOR_TOPIC",
                    widgets: widgetsFromServer
                }))
        },
        createWidget: (topicId, topicWidgetsLen) => {
            if (topicId !== "undefined" && typeof topicId !== "undefined") {
                widgetService.createWidget(topicId,
                    {name: `New Widget: ${topicWidgetsLen}`,
                        type: "HEADING", size: 1, widgetOrder: `${topicWidgetsLen}`,
                        text: "Heading...edit here"
                    })
                    .then((newWidget) =>
                        dispatch({
                            type: "CREATE_WIDGET",
                            newWidget: newWidget
                        })
                    )
            }
            else {
                alert("Select a topic to add widget to")
            }
        },
        deleteWidget: (widgetToDel) => {
            widgetService.deleteWidget(widgetToDel.id)
                .then((response) =>
                    dispatch({
                        type: "DELETE_WIDGET",
                        delWidgetId: widgetToDel.id
                    })
                )
        },
        updateWidget: (widget) => {
            console.log('updateWidget', widget.id, widget)
            widgetService.updateWidget(widget.id, widget)
                .then(status =>
                    dispatch({
                        type: "UPDATE_WIDGET",
                        widget
                    })
                )
        }
    }
}

// Connect returns a function (it is a wrapper function)
export default connect(stateToProps, dispatchToProps)(WidgetList)