import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import quizzesService from "../../services/quizzes-service"
import questionService from "../../services/questions-service"
import TrueFalse from "./true-false-question";
import MultipleChoice from "./multiple-choice-question";

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([])
    const [score, setScore] = useState(null)
    const [checkAnswer, setCheckAnswer] = useState(false)
    const [attempts, setAttempts] = useState([])

    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId)
            .then(quizQuestions => setQuestions(quizQuestions))
        quizzesService.findAttempts(quizId).then(attempts => setAttempts(attempts))
    }, [])

    const renderQuestionType = (q) => {
        switch (q.type) {
            case "MULTIPLE_CHOICE":
                return <MultipleChoice
                    question={q}
                    setQuestions={setQuestions}
                    allQuestions={questions}
                    checkAnswer={checkAnswer}
                >
                </MultipleChoice>
            case "TRUE_FALSE":
                return <TrueFalse
                    question={q}
                    setQuestions={setQuestions}
                    allQuestions={questions}
                    checkAnswer={checkAnswer}
                >
                </TrueFalse>
        }
    }

    const gradeQuiz = () => {
        quizzesService.submitQuiz(quizId, questions)
            .then(res => {
                setScore(res.score)
                setCheckAnswer(true)
            })
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
                <button className="ml-1 mt-3 btn btn-primary" onClick={() => gradeQuiz()}>Grade</button>
                {score != null && <h3 className="mt-4">Current Score: {score}</h3>}

                <div className="mt-4">
                    <h3>
                        Past Attempts: {attempts.length}
                    </h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Past Scores</th>
                            </tr>
                        </thead>
                        <tbody>
                        {attempts.map((attempt) => {
                            return (
                                <tr key = {attempt._id}>
                                    <td>{attempt.score}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Quiz;