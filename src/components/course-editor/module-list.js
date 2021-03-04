// Functional - renders a list of modules from current course
// Has label, input, edit btn, save btn, delete btn - default label and edit
// Clicking on title => selects module and highlights module
// Bottom of module list button allows adding new modules
// Rendered using an ItemEditor component

import {useEffect} from 'react'
import {connect} from 'react-redux'
import {useParams} from "react-router-dom";
import moduleService from "../../services/module-services";

const ModuleList = (
    {
        courseModules = [],
        findModulesForCourse,
        createModule,
        // deleteModule,
        // updateModule
    }) => {
    const {courseId} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)}, [])
    return (
        <div>
            <h2>Modules {courseModules.length} {courseId}</h2>
            <ul className="list-group">
                {
                    courseModules.map(module =>
                        <li className="list-group-item" key={module._id}>
                            {module._id} : {module.title}
                        </li>
                    )
                }
            </ul>
            <i onClick={() => createModule(courseId, courseModules.length)} className="fas fa-plus fa-2x"/>
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
                {console.log(newModule)
                    dispatch({
                    type: "CREATE_MODULE",
                    newModule: newModule
                })}
                )
        }
    }
}

// Connect returns a function (it is a wrapper function)
export default connect(stateToProps, dispatchToProps)(ModuleList)