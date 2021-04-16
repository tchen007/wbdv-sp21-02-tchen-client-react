import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import {findQuestionsForQuiz} from "../../services/questions-service";
import TrueFalse from "./true-false-question";
import MultipleChoice from "./multiple-choice-question";

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        findQuestionsForQuiz(quizId)
            .then(quizQuestions => setQuestions(quizQuestions))
    }, [quizId])

    const renderQuestionType = (q) => {
        switch (q.type) {
            case "MULTIPLE_CHOICE":
                return <MultipleChoice
                    question={q}
                >
                </MultipleChoice>
            case "TRUE_FALSE":
                return <TrueFalse
                    question={q}
                >
                </TrueFalse>
        }
    }

    return (
        <div>
            {/*Navigation Bar*/}
            <nav className="bg-primary navbar-dark custom-control-inline col-12">
                <div className="col-lg-3 col-auto m-3 custom-control-inline">
                    <button className="navbar-toggler my-3" type="button" data-toggle="dropdown" id="navbarMenuDropdown"
                            aria-expanded="false" aria-haspopup="true">
                        <i className="navbar-toggler-icon"/>
                    </button>
                    <div className="navbar-brand font-weight-bold my-3 ml-5" >Quiz ID: {quizId}</div>
                    <div className="dropdown-menu" aria-labelledby="navbarMenuDropdown">
                        <Link to="/courses/table" className="dropdown-item">Courses: Table View</Link>
                        <Link to="/courses/grid" className="dropdown-item">Courses: Grid View</Link>
                    </div>
                </div>
            </nav>
            <div className="container my-4">
                {
                    questions.map(question =>
                        <li className="py-4 list-group-item" key={question._id}>
                            {renderQuestionType(question)}
                        </li>
                    )
                }
            </div>



        </div>
    )
}

export default Quiz;