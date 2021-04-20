import React, {useEffect, useState} from 'react'
import quizzesService from "../../services/quizzes-service";

const TrueFalse = (
    {
        question,
        setQuestions,
        allQuestions,
        checkAnswer
    }) => {
    const [answer, setAnswer] = useState("")

    const updateAnswer = (choice) => {
        setAnswer(choice);
        let updatedQuestions = [...allQuestions]
        const questionIndex = allQuestions.findIndex(q => q._id === question._id)
        updatedQuestions[questionIndex] = {...question, answer: choice}
        setQuestions(updatedQuestions)
    }

    return (
        <>
            <div className="ml-3 row">
                <h4>{question.question}</h4>
                {
                    checkAnswer === true && answer === question.correct &&
                    <i className="ml-5 mt-2 fas fa-check fa-lg text-success float-right"></i>
                }
                {
                    checkAnswer === true && answer !== question.correct &&
                    <i className="ml-5 mt-2 fas fa-times fa-lg text-danger text-right"></i>
                }
            </div>
            <div className={`list-group-item
                ${checkAnswer === true && "true" === question.correct ? "list-group-item-success" : ""}
                ${checkAnswer === true && answer === "true" && answer !== question.correct ? "list-group-item-danger" : ""}`}>
                <input type="radio" name={question._id}
                       id="true_choice" onClick={() => updateAnswer("true")}/>
                <label className="ml-3 form-check-label" htmlFor="true_choice">
                    True</label>
                <i className={`
                ${checkAnswer === true && "true" == question.correct ? "mt-1 fas fa-check float-right" : ""}
                ${checkAnswer === true && answer === "true" && answer != question.correct ? "mt-1 fas fa-times float-right" : ""}`}>
                </i>
            </div>
            <div className={`list-group-item
                ${checkAnswer === true && "false" === question.correct ? "list-group-item-success" : ""}
                ${checkAnswer === true && answer === "false" && answer !== question.correct ? "list-group-item-danger" : ""}`}>
                <input type="radio" name={question._id}
                       id="false_choice" onClick={() => updateAnswer("false")}/>
                <label className="ml-3 form-check-label" htmlFor="false_choice">
                    False</label>
                <i className={`
                ${checkAnswer === true && "false" == question.correct ? "mt-1 fas fa-check float-right" : ""}
                ${checkAnswer === true && answer === "false" && answer != question.correct ? "mt-1 fas fa-times float-right" : ""}`}>
                </i>
            </div>
            {
                checkAnswer === true &&
                <div className="mt-3">Your Answer: {answer}</div>
            }
            {
                checkAnswer === false &&
                <div className="mt-3">Your Answer:</div>
            }
        </>
    )
}

export default TrueFalse;