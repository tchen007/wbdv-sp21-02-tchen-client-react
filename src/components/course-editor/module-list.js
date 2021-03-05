// Functional - renders a list of modules from current course
// Has label, input, edit btn, save btn, delete btn - default label and edit
// Clicking on title => selects module and highlights module
// Bottom of module list button allows adding new modules
// Rendered using an ItemEditor component

import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {useParams} from "react-router-dom";
import moduleService from "../../services/module-services";
import EditableItem from "./editable-item";
// import CourseService from "../../services/course-service";

const ModuleList = (
    {
        courseModules = [],
        findModulesForCourse,
        createModule,
        deleteModule,
        updateModule
    }) => {
    const {layout, courseId} = useParams();
    // const courseService = new CourseService();

    useEffect(() => {
        findModulesForCourse(courseId)}, [])
    return (
        <div>
            <h2>Modules {courseModules.length} {courseId}</h2>
            <ul className="list-group col-12">
                {
                    courseModules.map(module =>
                        <li className="list-group-item">
                            <EditableItem
                                path={`courses/${layout}/editor/${courseId}`}
                                updateItem={updateModule}
                                deleteItem={deleteModule}
                                active={true}
                                item={module}/>
                        </li>
                    )
                }
            </ul>
            <i onClick={() => createModule(courseId, courseModules.length)}
               className="fas fa-plus fa-2x float-right m-2"/>
        </div>)
}

// mapStateToProps returns function
const stateToProps = (state) => {
    return {
        courseModules: state.moduleReducer.modules
    }
}

// mapDispatchToProps returns Function OR Object
const dispatchToProps = (dispatch) => {
    return {
        findModulesForCourse: (courseId) => {
            moduleService.findModulesForCourse(courseId)
                .then(modulesFromServer => dispatch({
                    type: "FIND_MODULES_FOR_COURSE",
                    modules: modulesFromServer
                }))
        },
        createModule: (courseId, courseModulesLen) => {
            moduleService.createModule(courseId, {title: `Module: ${courseModulesLen}`})
                .then((newModule) =>
                    dispatch({
                        type: "CREATE_MODULE",
                        newModule: newModule
                    })
                )
        },
        deleteModule: (moduleToDel) => {
            moduleService.deleteModule(moduleToDel._id)
                .then((response) =>
                    dispatch({
                        type: "DELETE_MODULE",
                        moduleToDelId: moduleToDel._id
                    })
                )
        }
    }
}

// Connect returns a function (it is a wrapper function)
export default connect(stateToProps, dispatchToProps)(ModuleList)