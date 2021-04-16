import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import {findAllQuizzes} from "../../services/quizzes-service";

const QuizzesList = () => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        findAllQuizzes()
            .then(quizzes => setQuizzes(quizzes))
    }, [])

    return (
        <div>
            {/*Navigation Bar*/}
            <nav className="bg-primary navbar-dark custom-control-inline col-12">
                <div className="col-lg-3 col-auto m-3 custom-control-inline">
                    <button className="navbar-toggler my-3" type="button" data-toggle="dropdown" id="navbarMenuDropdown"
                            aria-expanded="false" aria-haspopup="true">
                        <i className="navbar-toggler-icon"/>
                    </button>
                    <div className="navbar-brand font-weight-bold my-3 ml-5" >Quizzes</div>
                    <div className="dropdown-menu" aria-labelledby="navbarMenuDropdown">
                        <Link to="/courses/table" className="dropdown-item">Courses: Table View</Link>
                        <Link to="/courses/grid" className="dropdown-item">Courses: Grid View</Link>
                    </div>
                </div>
            </nav>
            <div className="container mt-5">
                <ul className="nav list-group col-12">
                    {
                     quizzes.map(quiz =>
                         <li className="list-group-item" key={quiz._id}>
                             <Link className="align-middle" to={`/courses/${courseId}/quizzes/${quiz._id}`}>{quiz.title}</Link>
                             <Link className="btn btn-primary float-right" to={`/courses/${courseId}/quizzes/${quiz._id}`}>Start</Link>
                         </li>
                     )
                    }
                </ul>
            </div>
        </div>
    )
}

export default QuizzesList;