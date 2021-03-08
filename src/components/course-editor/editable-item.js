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
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)

    return (
        <>
            { !editing &&
                <>
                    <Link className={`p-2 mt-2 text-left text-truncate d-inline-block col-12 ${active ? "active text-white" : ""}`}
                          to={path}>
                        {item.title}
                        <i onClick={(event) =>
                        {
                            event.preventDefault()
                            setEditing(true)
                        }}
                           className="fas text-center fa-edit fa-lg float-right"/>
                    </Link>
                </>
            }
            { editing &&
                <div className={`py-2 col-12 rounded ${active ? "" : "bg-dark"} text-left d-inline-flex`}>
                    <input className="form-control col-8"
                       onChange={(event) => setCachedItem(
                           {...cachedItem, title: event.target.value}
                       )}
                       value={cachedItem.title}>
                    </input>
                    <span className="col-5 pt-2 d-inline-flex justify-content-end">
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