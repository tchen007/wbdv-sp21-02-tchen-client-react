import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {useParams} from "react-router-dom";
import topicService from "../../services/topic-service";
import EditableItem from "./editable-item";

const TopicPills = (
    {
        lessonTopics = [],
        findTopicsForLesson,
        createTopic,
        deleteTopic,
        updateTopic
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();

    useEffect(() => {
            findTopicsForLesson(lessonId)
    }, [lessonId])

    return(
        <div className="mt-4">
            { lessonTopics.length > 0 &&
                <ul className="nav nav-pills border border-white col-12 nav-justified">
                    {
                        lessonTopics.map(topic =>
                                <EditableItem
                                    key={topic._id}
                                    path={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                    updateItem={updateTopic}
                                    deleteItem={deleteTopic}
                                    active={topic._id === topicId}
                                    item={topic}
                                    type={"pill"}
                                />
                        )
                    }
                    <i onClick={() => createTopic(lessonId, lessonTopics.length)}
                       className="fas fa-plus fa-2x mx-5 pb-2 mt-2"/>
                </ul>
            }
            { typeof lessonId !== "undefined" && lessonTopics.length === 0 &&
            <>
                <h5 className="text-black-50 font-italic d-inline">No topics to display</h5>
                <i onClick={() => createTopic(lessonId, lessonTopics.length)}
                className="fas fa-plus fa-2x mx-3 mr-5 pr-3 pb-2 mt-2 float-right"/>
            </>
            }
        </div>

    )
}


const stateToProps = (state) => {
    return {
        lessonTopics: state.topicReducer.topics
    }
}

const dispatchToProps = (dispatch) => {
    return {
        findTopicsForLesson: (lessonId) => {
            topicService.findTopicsForLesson(lessonId)
                .then(topicsFromServer => dispatch({
                    type: "FIND_TOPICS_FOR_LESSON",
                    topics: topicsFromServer
                }))
        },
        createTopic: (lessonId, lessonTopicsLen) => {
            if (lessonId !== "undefined" && typeof lessonId !== "undefined") {
                topicService.createTopic(lessonId, {title: `New Topic: ${lessonTopicsLen}` })
                    .then((newTopic) =>
                        dispatch({
                            type: "CREATE_TOPIC",
                            newTopic: newTopic
                        })
                    )
            }
            else {
                alert("Select a lesson to add the topic to")
            }
        },
        deleteTopic: (topicToDel) => {
            topicService.deleteTopic(topicToDel._id)
                .then((response) =>
                    dispatch({
                        type: "DELETE_TOPIC",
                        topicToDelId: topicToDel._id
                    })
                )
        },
        updateTopic: (topic) => {
            topicService.updateTopic(topic._id, topic)
                .then(status =>
                    dispatch({
                        type: "UPDATE_TOPIC",
                        topic
                    })
                )
        }
    }
}

// Connect returns a function (it is a wrapper function)
export default connect(stateToProps, dispatchToProps)(TopicPills)








