import React, {useState} from 'react'


const ParagraphWidget = (
    {
        widget,
        editing,
        setWidget
    }) => {
    return (
        <>
            { !editing &&
            <p className="col-11 custom-control-inline mt-3">{widget.text}</p>
            }
            {
                editing &&
                <form className="form-group col-11">
                    <select className="form-control custom-control-inline mt-3"
                            onChange={(event) =>
                                setWidget({...widget, type: event.target.value}
                            )}
                            value={widget.type}
                    >
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"LIST"}>List</option>
                        <option value={"IMAGE"}>Image</option>
                    </select>
                    <textarea className="form-control mt-3 outflow-auto" rows="5"
                           onChange={(event) =>
                               setWidget({...widget, text: event.target.value})
                           }
                           value={widget.text}/>
                </form>
            }
        </>
    )
}

export default ParagraphWidget