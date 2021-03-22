import React, {useState} from 'react'


const ParagraphWidget = (
    {
        widget,
        updateWidget,
        deleteWidget,
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedWidget, setCachedWidget] = useState(widget)
    return (
        <>
            { !editing &&
            <> <p className="col-11 custom-control-inline mt-3">{cachedWidget.text}</p>
                <i onClick={(event) =>
                    setEditing(true)
                }
                   className="fas fa-edit fa-lg"/>
            </>
            }
            {
                editing &&
                <form className="form-group">
                    <select className="form-control col-11 custom-control-inline mt-3"
                            onChange={(event) => setCachedWidget(
                                {...cachedWidget, type: event.target.value}
                            )}
                            value={cachedWidget.type}
                    >
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                    </select>
                    <span>
                            <i onClick={() => {
                                setEditing(false)
                                if (cachedWidget !== widget) {
                                    updateWidget(cachedWidget)
                                }
                            }}
                               className={`fas fa-check fa-lg mr-3`}/>
                            <i onClick={() => {
                                setEditing(false)
                                deleteWidget(cachedWidget)
                            }}
                               className={`fas fa-minus-circle fa-lg`}/>
                    </span>
                    <textarea className="form-control col-11 custom-control-inline mt-3 outflow-auto" rows="5"
                           onChange={(event) => setCachedWidget(
                               {...cachedWidget, text: event.target.value}
                           )}
                           value={cachedWidget.text}/>
                </form>
            }
        </>
    )
}

export default ParagraphWidget