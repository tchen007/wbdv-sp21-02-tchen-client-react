// Functional - renders a list of modules from current course
// Has label, input, edit btn, save btn, delete btn - default label and edit
// Clicking on title => selects module and highlights module
// Bottom of module list button allows adding new modules
// Rendered using an ItemEditor component

import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {useParams} from "react-router-dom";
import moduleService from "../../services/module-service";
import EditableItem from "./editable-item";
// import CourseService from "../../services/course-service";

const ModuleList = (
    {
        courseModules = [],
        findModulesForCourse,
        createModule,
        deleteModule,
        updateModule,
    }) => {
    const {layout, courseId , moduleId} = useParams();


    useEffect(() => {
        findModulesForCourse(courseId)}, [])
    return (
        <>
            { courseModules.length > 0 &&
                <ul className="nav list-group col-12">
                    {
                        courseModules.map(module =>
                            <EditableItem
                                key={module._id}
                                path={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                updateItem={updateModule}
                                deleteItem={deleteModule}
                                active={module._id === moduleId}
                                item={module}
                                type={"list"}
                            />
                        )
                    }
                    <i onClick={() => createModule(courseId, courseModules.length)}
                       className="fas fa-plus fa-2x text-right mr-4 mt-3 pb-5 pr-1"/>
                </ul>
            }
            { courseModules.length === 0 &&
                <div className="pt-0">
                    <h5 className="text-black-50 font-italic d-inline-block pt-4">No modules to display</h5>
                    <i onClick={() => createModule(courseId, courseModules.length)}
                       className="fas fa-plus fa-2x mx-5 mt-3 pb-2 float-right d-inline-block"/>
                </div>
            }
        </>
    )
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
            moduleService.createModule(courseId, {title: `New Module: ${courseModulesLen + 1}`})
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
        },
        updateModule: (module) => {
            moduleService.updateModule(module._id, module)
                .then(status =>
                    dispatch({
                        type: "UPDATE_MODULE",
                        module
                    })
                )
        }
    }
}

// Connect returns a function (it is a wrapper function)
export default connect(stateToProps, dispatchToProps)(ModuleList)