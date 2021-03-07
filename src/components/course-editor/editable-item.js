import React, {useState} from 'react'
import {NavLink, Link, useLocation, useRouteMatch} from "react-router-dom";

const EditableItem = (
    {
        // setEditForParent,
        // childEditing,
        path,
        deleteItem,
        updateItem,
        item,
        active
    }) => {
    // useState() returns state and function that updates it
    const [editing, setEditing] = useState(false)
    // CachedItem is to save the current item to change title while editing
    const [cachedItem, setCachedItem] = useState(item)
    // const [selected, setSelected] = useState(active)
    // const location = useLocation()
    // const location = useRouteMatch(path)

    return (
        <>
            { !editing &&
                <>
                    <Link className={`btn text-left text-truncate d-inline-block col-12 ${active ? "active text-white" : ""}`}
                          to={path}>
                        {item.title}
                        <i onClick={(event) =>
                        {
                            event.preventDefault()
                            setEditing(true)
                        }}
                           className="fas fa-edit fa-lg float-right pt-1"/>
                    </Link>
                </>
            }
            { editing &&
                <div className="col-12 bg-primary btn text-left">
                <input className="form-control col-7 custom-control-inline"
                   onChange={(event) => setCachedItem(
                       {...cachedItem, title: event.target.value}
                   )}
                   value={cachedItem.title}>
                </input>
                <span className="float-right pt-2">
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(cachedItem)
                    }}
                       className={`fas fa-check fa-lg mr-3 text-white`}/>
                    <i onClick={() => {
                        if (!active) {
                            setEditing(false)
                            deleteItem(cachedItem)
                        }
                        else{
                            alert(`Invalid delete: ${item.title}`)
                        }
                    }}
                       className={`fas fa-minus-circle fa-lg text-white`}/>
                </span>
                </div>
            }
        </>
    )
}

export default EditableItem