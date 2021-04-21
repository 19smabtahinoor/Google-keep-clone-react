import React from 'react'
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


function Note(props){
    const deleteNote = () => {
        props.deleteItem(props.id)
    }
    return(
        <>
            <div className="note">
                <h2 className="note-title">{props.titles}</h2>
                <div className="note-area">
                <span className="note-description">
                    {props.contents}
                </span>
                </div>
                
                <Button className="delete-button" onClick={deleteNote}>
                    <DeleteOutlineIcon className="delete-icon"/>
                </Button>
            </div>
        </>
    )
}
export default Note