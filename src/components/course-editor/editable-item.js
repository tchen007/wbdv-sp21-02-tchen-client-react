import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        path,
        deleteItem,
        updateItem,
        item,
        active
    }) => {
    console.log(item)
    // useState() returns state and function that updates it
    const [editing, setEditing] = useState(false)
    // CachedItem is to save the current item to change title while editing
    const [cachedItem, setCachedItem] = useState(item)

    return (
        <>
            { !editing &&
            <>
                <Link className={`nav-link d-inline-block text-dark col-8 ${active ? 'active' : ''}`} to={path}>
                    {item.title} {JSON.stringify(active)}
                </Link>
                <span className="ml-4 col-2 d-inline">
                    <i onClick={() => setEditing(true)}
                       className="fas fa-edit fa-lg mr-2"/>
                    <i onClick={() => setEditing(true)}
                       className="fas fa-edit fa-lg"/>
                </span>
            </>
            }
            { editing &&
            <>
                <input className="col-8 form-control"
                   onChange={(event) => setCachedItem(
                       {...cachedItem, title: event.target.value}
                   )}
                   value={cachedItem.title}/>
                <span className="ml-4 col-2 d-">
                    <i onClick={() => {
                        setEditing(false)
                    }}
                       className="fas fa-check fa-lg mr-3 text-success"/>
                    <i onClick={() => {
                        setEditing(false)
                    }}
                       className="fas fa-minus-circle fa-lg text-danger"/>
                </span>
            </>
            }
        </>
    )
}

export default EditableItem