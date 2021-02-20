import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";

export default class CourseManager extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.state = {
            courses: []
        }
    }

    // Methods are called in the following order when instance of component is created / inserted into Dom
    // constructor, getDervivedStateFromProps(), render(), componentDidMount()
    componentsDidMount = () =>
        this.courseService.findAllCourses()
            .then(coursesFromServer => this.setState({courses: coursesFromServer}))


    render() {
        return(
            <div>
                {/*Navigation Bar*/}
                <nav className="bg-primary navbar-dark custom-control-inline col-12">
                    <div className="col-lg-3 col-auto m-3 custom-control-inline">
                        <button className="navbar-toggler my-3" type="button" data-toggle="dropdown" id="navbarMenuDropdown"
                                aria-expanded="false" aria-haspopup="true">
                            <i className="navbar-toggler-icon"></i>
                        </button>
                        <div className="navbar-brand font-weight-bold d-none d-lg-block m-3" >Course Manager</div>
                        <div className="dropdown-menu" aria-labelledby="navbarMenuDropdown">
                            {/*Reformat to a Route or Link to=*/}
                            <a className="dropdown-item" href="../index.html">Home</a>
                            <a className="dropdown-item" href="../login/login.template.client.html">Login</a>
                            <a className="dropdown-item" href="../profile/profile.template.client.html">Profile</a>
                        </div>
                    </div>
                    <div className="col-lg-10 my-3 custom-control-inline float-right">
                        <input className="form-control font-italic my-3 col-10" type="text" placeholder="New Course Title"/>
                        <button className="btn btn-danger rounded-circle m-3">
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                </nav>

                <CourseTable/>

                {/*Button at Bottom Right*/}
                <div className="col-12">
                    <button className="btn btn-danger rounded-circle wbdv-bottom-right" type="submit">
                        <span className="fas fa-plus fa-2x"></span>
                    </button>
                </div>
            </div>

        )
    }






}



const CourseManager = () =>

    <div>
        {/*Navigation Bar*/}
        <nav className="bg-primary navbar-dark custom-control-inline col-12">
                <div className="col-lg-3 col-auto m-3 custom-control-inline">
                    <button className="navbar-toggler my-3" type="button" data-toggle="dropdown" id="navbarMenuDropdown"
                            aria-expanded="false" aria-haspopup="true">
                        <i className="navbar-toggler-icon"></i>
                    </button>
                    <div className="navbar-brand font-weight-bold d-none d-lg-block m-3" >Course Manager</div>
                    <div className="dropdown-menu" aria-labelledby="navbarMenuDropdown">
                        {/*Reformat to a Route or Link to=*/}
                        <a className="dropdown-item" href="../index.html">Home</a>
                        <a className="dropdown-item" href="../login/login.template.client.html">Login</a>
                        <a className="dropdown-item" href="../profile/profile.template.client.html">Profile</a>
                    </div>
                </div>
            <div className="col-lg-10 my-3 custom-control-inline float-right">
                <input className="form-control font-italic my-3 col-10" type="text" placeholder="New Course Title"/>
                <button className="btn btn-danger rounded-circle m-3">
                    <i className="fas fa-plus"></i>
                </button>
            </div>
        </nav>

        <CourseTable/>

        {/*Button at Bottom Right*/}
        <div className="col-12">
            <button className="btn btn-danger rounded-circle wbdv-bottom-right" type="submit">
                <span className="fas fa-plus fa-2x"></span>
            </button>
        </div>
    </div>

export default CourseManager;