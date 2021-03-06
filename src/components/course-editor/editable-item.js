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
    // useState() returns state and function that updates it
    const [editing, setEditing] = useState(false)
    // CachedItem is to save the current item to change title while editing
    const [cachedItem, setCachedItem] = useState(item)

    return (
        <>
            { !editing &&
            <>
                <Link className={`nav-link d-inline-block text-truncate col-8 ${active ? 'active' : ''}`} to={path}>
                    {item.title} {JSON.stringify(active)} {item._id}
                </Link>
                <span className="col-3 float-right text-right pt-2">
                    <i onClick={() => setEditing(true)}
                       className="fas fa-edit fa-lg"/>
                </span>
            </>
            }
            { editing &&
            <>
                <input className="col-8 form-control d-inline-block"
                   onChange={(event) => setCachedItem(
                       {...cachedItem, title: event.target.value}
                   )}
                   value={cachedItem.title}/>
                <span className="col-3 float-right text-right pt-2">
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(cachedItem)
                    }}
                       className="fas fa-check fa-lg mr-3 text-success"/>
                    <i onClick={() => {
                        setEditing(false)
                        deleteItem(cachedItem)
                    }}
                       className="fas fa-minus-circle fa-lg text-danger"/>
                </span>
            </>
            }
        </>
    )
}

export default EditableItem