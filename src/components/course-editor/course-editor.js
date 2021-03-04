// History is a unique react router object
// map to /courses/:layout/edit/:courseId
// Displays the modules, lessons, and topics for a course whose ID is courseId

import {Link} from "react-router-dom";
import React from "react";
import moduleReducer from "../../reducers/module-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";

const reducer = combineReducers({
    moduleReducer
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
    return (
        <Provider store={store}>
            {/*Navigation Bar*/}
            <div className="row">
                <nav className="bg-primary navbar-dark custom-control-inline col-12 p-3">
                    <button className="btn btn-outline-light rounded-circle my-3 ml-3 mr-5"
                            onClick={() => history.goBack()}>
                        <i className="fas fa-arrow-left"/>
                    </button>
                    <div className="navbar-brand font-weight-bold d-none d-lg-block my-3 ml-3" >Course Editor:</div>
                    <div className="navbar-brand font-weight-bold text-truncate my-3 ml-3 ml-lg-0 ml-xl-0">Course Name</div>
                </nav>
            </div>
            <ModuleList/>
        </Provider>
        // <div>
        //     <nav className="navbar-dark bg-dark row pt-3">
        //         <div className="col-3">
        //             <button className="btn btn-outline-light rounded-circle float-left ml-3"
        //                     onClick={() => history.goBack()}>
        //                 <i className="fas fa-arrow-left"></i>
        //             </button>
        //             <button className="btn text-white">
        //                 <i className="fas fa-times"></i>
        //             </button>
        //             <a className="navbar-brand text-wrap" href="#">CS5610 - WebDev</a>
        //         </div>
        //         <div className="col-8 custom-control-inline">
        //             <ul className="nav nav-tabs col-11 nav-fill">
        //                 <li className="nav-item">
        //                     <a className="nav-link color-white" href="#">Build</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link active-dark" aria-current="" href="#">Pages</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link color-white" href="#">Theme</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link disabled" href="#" tabIndex="-1">Store</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link color-white" href="#">Apps</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link color-white" href="#">Settings</a>
        //                 </li>
        //             </ul>
        //             <div className="col-1">
        //                 <button className="btn btn-outline-light rounded-circle mb-1" type="submit">
        //                     <i className="fas fa-plus"></i>
        //                 </button>
        //             </div>
        //         </div>
        //     </nav>
        //
        //     <div className="row">
        //         <div className="col-3 bg-secondary d-none d-md-block">
        //             <ul className="list-group mb-3 mt-5 ml-3 mr-1">
        //                 <li className="list-group-item mb-3 rounded bg-dark text-white">
        //                     Module 1 - jQuery
        //                     <i className="fas fa-trash float-right mt-1 mr-1"></i>
        //                 </li>
        //                 <li className="list-group-item mb-3 rounded active">
        //                     Module 2 - React
        //                     <i className="fas fa-trash float-right mt-1 mr-1"></i>
        //                 </li>
        //                 <li className="list-group-item mb-3 rounded bg-dark text-white">
        //                     Module 3 - Redux
        //                     <i className="fas fa-trash float-right mt-1 mr-1"></i>
        //                 </li>
        //                 <li className="list-group-item mb-3 rounded bg-dark text-white">
        //                     Module 4 - Native
        //                     <i className="fas fa-trash float-right mt-1 mr-1"></i>
        //                 </li>
        //                 <li className="list-group-item mb-3 rounded bg-dark text-white">
        //                     Module 5 - Angular
        //                     <i className="fas fa-trash float-right mt-1 mr-1"></i>
        //                 </li>
        //                 <li className="list-group-item mb-3 rounded bg-dark text-white">
        //                     Module 6 - Node
        //                     <i className="fas fa-trash float-right mt-1 mr-1"></i>
        //                 </li>
        //                 <li className="list-group-item mb-3 rounded bg-dark text-white">
        //                     Module 7 - Mongo
        //                     <i className="fas fa-trash float-right mt-1 mr-1"></i>
        //                 </li>
        //             </ul>
        //             <button className="btn btn-outline-light rounded-circle float-right mt-2 mb-5 mr-3" type="submit">
        //                 <i className="fas fa-plus"></i>
        //             </button>
        //         </div>
        //
        //         <div className="col-9">
        //             <ul className="nav nav-pills mt-5 flex-sm-row">
        //                 <li className="nav-item">
        //                     <a className="nav-link bg-secondary text-white mx-3 mb-2" href="#">
        //                         Topic 1
        //                     </a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link bg-dark text-white mx-3 mb-2" aria-current="page"
        //                        href="#">
        //                         Topic 2
        //                     </a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link bg-secondary text-white mx-3 mb-2"
        //                        href="#">
        //                         Topic 3
        //                     </a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link bg-secondary text-white mx-3 mb-2"
        //                        href="#">
        //                         Topic 4
        //                     </a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link bg-secondary text-white mx-3 mb-2"
        //                        href="#">
        //                         Topic 5
        //                     </a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link bg-secondary color-white mx-3 mb-2">
        //                         <i className="fas fa-plus"></i>
        //                     </a>
        //                 </li>
        //             </ul>
        //             <div className="col-12">
        //                 <div className="m-4 float-right">
        //                     <button className="btn btn-success mr-2">
        //                         Save
        //                     </button>
        //                     Preview
        //                     <i className="far fa-toggle-off"></i>
        //                 </div>
        //             </div>
        //         </div>
        // </div>
        // </div>
    )
}
export default CourseEditor