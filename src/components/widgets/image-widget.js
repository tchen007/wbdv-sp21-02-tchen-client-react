import React from 'react'
import ParagraphWidget from "./paragraph-widget";

const ImageWidget = (
    {
        widget,
        editing,
        setWidget
    }) => {

    return <>
        { !editing &&
        <img className="col-11 custom-control-inline" src={widget.url} width={widget.width} height={widget.height}/>
        }
        { editing &&
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
                    <option value={"IMAGE"}>Image</option>
                </select>
                <label className="ml-1 mt-5" for="imageURL">Image URL</label>
                <input className="form-control" id="imageURL" placeholder="Image URL"
                       onChange={(event) =>
                           setWidget({...widget, url: event.target.value})
                       }
                       value={widget.url}/>
                <label className="ml-1 mt-2" for="imageWidth">Image Width</label>
                <input className="form-control" id="imageWidth" placeholder="Image width"
                       onChange={(event) =>
                           setWidget({...widget, width: event.target.value})
                       }
                       value={widget.width}/>
                <label className="ml-1 mt-2" for="imageHeight">Image Height</label>
                <input className="form-control" id="imageHeight" placeholder="Image height"
                       onChange={(event) =>
                           setWidget({...widget, height: event.target.value})
                       }
                       value={widget.height}/>
            </form>


        }
        </>

}

export default ImageWidget
