// Functional - renders a list of modules from current course
// Has label, input, edit btn, save btn, delete btn - default label and edit
// Clicking on title => selects module and highlights module
// Bottom of module list button allows adding new modules
// Rendered using an ItemEditor component

import React, {useEffect, useState} from 'react'
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
        updateModule,
    }) => {
    const {layout, courseId , moduleId} = useParams();
    // const courseService = new CourseService();
    // const [selected, setSelected] = useState(false)
    // const [childEditing, setEditingFromChild] = useState([])

    // const childEditing = []

    // const handleChange = (moduleId) => {
    //     childEditing.push(moduleId)
    // }

    useEffect(() => {
        findModulesForCourse(courseId)}, [])
    return (
        <div>
            <h2>Modules {courseModules.length} {courseId}</h2>
            <ul className="nav list-group col-12">
                {/*${(module._id === moduleId || childEditing.includes(module._id.toString())) ? "active": ""} `}*/}
                {
                    courseModules.map(module =>
                        <li className={`list-group-item col-12
                            ${module._id === moduleId ? "active": ""} `}
                    key={module._id}>
                            <EditableItem
                                path={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                updateItem={updateModule}
                                deleteItem={deleteModule}
                                active={module._id === moduleId}
                                item={module}/>
                                {/*setEditForParent={handleChange}*/}
                                {/*childEditing={childEditing}*/}
                        </li>
                    )
                }
            </ul>
            <i onClick={() => createModule(courseId, courseModules.length)}
               className="fas fa-plus fa-2x float-right mx-5 mt-3 pb-5"/>
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
                .then(console.log("dispatch"))
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