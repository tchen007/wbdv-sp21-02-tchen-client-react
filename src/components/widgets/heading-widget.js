import React from 'react'

const HeadingWidget = (
    {
        widget,
        editing,
        setWidget
    }) => {
    const renderHeader = () => {
        switch (widget.size) {
            case 1:
                return <h1 className="custom-control-inline col-11">
                    {widget.text}
                </h1>
            case 2:
                return <h2 className="custom-control-inline col-11">
                    {widget.text}
                </h2>
            case 3:
                return <h3 className="custom-control-inline col-11">
                    {widget.text}
                </h3>
            case 4:
                return <h4 className="custom-control-inline col-11">
                    {widget.text}
                </h4>
            case 5:
                return <h5 className="custom-control-inline col-11">
                    {widget.text}
                </h5>
            case 6:
                return <h6 className="custom-control-inline col-11">
                    {widget.text}
                </h6>
        }
}
    return <>
        { !editing &&
            <> {renderHeader()}</>
        }
        {
            editing &&
            <form className="form-group col-11">
                <select className="form-control mt-3"
                        onChange={(event) =>
                            setWidget({...widget, type: event.target.value}
                        )}
                        value={widget.type}
                >
                    <option value={"HEADING"}>Heading</option>
                    <option value={"PARAGRAPH"}>Paragraph</option>
                    <option value={"LIST"}>List</option>
                </select>
                <input className="form-control mt-3"
                       onChange={(event) =>
                           setWidget({...widget, text: event.target.value})
                       }
                       value={widget.text}/>
                <select className="form-control mt-3"
                        onChange={(event) =>
                            setWidget({...widget, size: parseInt(event.target.value)})
                        }
                        value={widget.size}
                        >
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                </select>
            </form>
        }
    </>
}

export default HeadingWidget
