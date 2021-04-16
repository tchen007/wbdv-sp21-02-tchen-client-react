import React, {useEffect, useState} from 'react'

const MultipleChoice = (
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
                        checkAnswer === true && answer == question.correct &&
                        <i className="ml-5 mt-2 fas fa-check fa-lg text-success float-right"></i>

                    }
                    {
                        checkAnswer === true && answer != question.correct &&
                        <i className="ml-5 mt-2 fas fa-times fa-lg text-danger text-right"></i>
                    }
                </div>
                {
                    question.choices.map((choice, index) => {
                        return (
                            <div className={`list-group-item
                                ${checkAnswer === true && answer === choice && answer == question.correct ? "list-group-item-success" : ""}
                                ${checkAnswer === true && answer === choice && answer != question.correct ? "list-group-item-danger" : ""}`}
                                 key={index}>
                                <input type="radio" name={question._id} id={choice}
                                       onClick={() => setAnswer(choice)}/>
                                <label className="ml-3 form-check-label" htmlFor={choice}>
                                    {choice}</label>
                                <i className={`
                                    ${checkAnswer === true && answer === choice && answer == question.correct ? "mt-1 fas fa-check float-right" : ""}
                                    ${checkAnswer === true && answer === choice && answer != question.correct ? "mt-1 fas fa-times float-right" : ""}`}>
                                </i>
                            </div>
                        )
                    })
                }
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

export default MultipleChoice;