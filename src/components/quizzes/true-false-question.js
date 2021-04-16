import React, {useEffect, useState} from 'react'

const TrueFalse = (
    {
        question,
    }) => {
    const [answer, setAnswer] = useState("")
    const [checkAnswer, setCheckAnswer] = useState(false)

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
                ${checkAnswer === true && answer === "true" && answer === question.correct ? "list-group-item-success" : ""}
                ${checkAnswer === true && answer === "true" && answer !== question.correct ? "list-group-item-danger" : ""}`}>
                <input type="radio" name={question._id}
                       id="true_choice" onClick={() => setAnswer("true")}/>
                <label className="ml-3 form-check-label" htmlFor="true_choice">
                    True</label>
                <i className={`
                ${checkAnswer === true && answer === "true" && answer == question.correct ? "mt-1 fas fa-check float-right" : ""}
                ${checkAnswer === true && answer === "true" && answer != question.correct ? "mt-1 fas fa-times float-right" : ""}`}>
                </i>
            </div>
            <div className={`list-group-item
                ${checkAnswer === true && answer === "false" && answer === question.correct ? "list-group-item-success" : ""}
                ${checkAnswer === true && answer === "false" && answer !== question.correct ? "list-group-item-danger" : ""}`}>
                <input type="radio" name={question._id}
                       id="false_choice" onClick={() => setAnswer("false")}/>
                <label className="ml-3 form-check-label" htmlFor="false_choice">
                    False</label>
                <i className={`
                ${checkAnswer === true && answer === "false" && answer == question.correct ? "mt-1 fas fa-check float-right" : ""}
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
            <button className="ml-1 mt-3 btn btn-primary" onClick={() => setCheckAnswer(true)}>Grade</button>
        </>
    )
}

export default TrueFalse;