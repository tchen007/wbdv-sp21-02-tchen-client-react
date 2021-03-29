import React from 'react'

const ListWidget = (
    {
        widget,
        editing,
        setWidget
    }) => {
    const renderList = () => {
        if (widget.isOrdered==undefined) {

        }

        switch (widget.isOrdered) {
            case false:
                return <ul>
                    {
                        widget.text.split("\n").map((line,index) =>
                            <li key={index}>
                                {line}
                            </li>
                        )
                    }
                </ul>
            case true:
                return <ol>
                    {
                        widget.text.split("\n").map((line, index) =>
                            <li key={index}>
                                {line}</li>
                        )
                    }
                </ol>
        }
    }

    return <>
        { !editing &&
            <div className="col-11 custom-control-inline">
                {renderList()}
            </div>

        }
        { editing &&
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
            <input className="mt-5 mb-3" type="checkbox" checked={widget.isOrdered}
                   onChange={(event) =>
                       setWidget({...widget, isOrdered: event.target.checked})
                   }/> Ordered
            <br/>List Items
            <textarea rows="10" className="form-control mt-1"
                      placeholder="Enter one list item per line"
                      onChange={(event) =>
                          setWidget({...widget, text: event.target.value})
                      }
                      value={widget.text}/>
        </form>
        }
    </>
}

export default ListWidget
