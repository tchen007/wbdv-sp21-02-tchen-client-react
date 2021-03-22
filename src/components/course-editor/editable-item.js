import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        path,
        deleteItem,
        updateItem,
        item,
        active,
        type
    }) => {
    const types = {
        LIST: "list",
        TAB: "tab",
        PILL: "pill"
    }

    const listStyle = "list-group-item"
    const tabStyle = "nav-link rounded pb-3"
    const pillStyle = "nav-item rounded mr-2 pb-2"
    let style;

    const setStyle = () => {
        switch (type) {
            case types.LIST:
                style = listStyle
                break;
            case types.TAB:
                style = tabStyle
                break;
            case types.PILL:
                style = pillStyle
                break;
        }
    }
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)
    setStyle()
    return (
        <>
            { !editing &&
                <li className={`col-12 ${style} ${active ? "active text-white bg-primary" : ""}`}>
                    <Link className={`p-2 mt-2 text-left text-truncate custom-control-inline col-11 ${active ? "active text-white" : ""}`}
                          to={path}>
                        {item.title}
                        <i onClick={(event) =>
                        {
                            event.preventDefault()
                            setEditing(true)
                        }}
                           className="ml-auto mt-1 fas fa-edit fa-lg"/>
                    </Link>
                </li>
            }
            { editing &&
                <li className={`${style} col-12 px-3 py-3 bg-primary ${active ? "active " : ""} `}>
                    <input className="form-control col-7 custom-control-inline"
                       onChange={(event) => setCachedItem(
                           {...cachedItem, title: event.target.value}
                       )}
                       value={cachedItem.title}>
                    </input>
                    <span className="mt-1 ml-auto d-inline text-white">
                        <i onClick={() => {
                            setEditing(false)
                            updateItem(cachedItem)
                        }}
                           className={`fas fa-check fa-lg mx-2`}/>
                        <i onClick={() => {
                            if (!active) {
                                setEditing(false)
                                deleteItem(cachedItem)
                            }
                            else{
                                alert(`Invalid delete: ${item.title} is currently selected`)
                            }
                        }}
                           className={`fas fa-minus-circle fa-lg`}/>
                    </span>
                </li>
            }
        </>
    )
}

export default EditableItem