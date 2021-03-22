import React, {useState} from 'react'

const HeadingWidget = (
    {
        widget,
        updateWidget,
        deleteWidget
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedWidget, setCachedWidget] = useState(widget)
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
            <> {renderHeader()}
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
                        onChange={(event) =>
                            setCachedWidget(
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
                            const newEditingWidgetList =
                                editingWidget.filter(item => item.id !== widget.id)
                            setEditingWidget([newEditingWidgetList])
                        }}
                           className={`fas fa-check fa-lg mr-3`}/>
                        <i onClick={() => {
                            setEditing(false)
                            deleteWidget(cachedWidget)
                            const newEditingWidgetList =
                                editingWidget.filter(item => item.id !== widget.id)
                            setEditingWidget([newEditingWidgetList])
                        }}
                           className={`fas fa-minus-circle fa-lg`}/>
                </span>
                <input className="form-control col-11 custom-control-inline mt-3"
                       onChange={(event) => setCachedWidget(
                           {...cachedWidget, text: event.target.value}
                       )}
                       value={cachedWidget.text}/>
                <select className="form-control col-11 mt-3"
                        onChange={(event) => setCachedWidget(
                            {...cachedWidget, size: parseInt(event.target.value)}
                        )}
                        value={cachedWidget.size}
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
