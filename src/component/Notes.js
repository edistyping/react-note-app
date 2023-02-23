import { useState, useEffect } from 'react';

import Note from './Note'
import EditNote from './EditNotes'
import '../App.css'

export default function Notes( {handleEdit, handleDelete, notes, category} ) {
    const styleContainer = {
      height: '100%',
      width: "60%",
      backgroundColor: "skyblue",
    }

    var selectedNotes;
    if (category === "all")
      selectedNotes = notes;
    else {
        selectedNotes = notes.filter(obj => {
            return obj.category === category
        })
    }  

    const selectedNotes_length = selectedNotes === null ? 0 : selectedNotes.length
    const [editing, setEditing] = useState(false);
    const handleSubmitEdit = (i, temp) => {
      handleEdit(i, temp)
      setEditing(false);
    }
    const handleCloseEdit = (i, temp) => {
      setEditing(false);
    }

    console.log(notes);

    return (
      <>
        <div style={styleContainer} >
            <h2 style={{margin: "1%", fontSize: "1em"}}>There are {selectedNotes_length} notes! </h2>
  
            <div className='Notes-Container-Grid'>
              {selectedNotes && selectedNotes.map((note, i) => {
                return(
                      <div className='Note-Container' key={i} >
                          <div className='Notes-Header'>  
                                <h3>({i}) {note.title} - {note.category}<span>{note.date}</span></h3>
                                <div className="Notes-Buttons">
                                    <button onClick={() => {setEditing(true)}}>Edit1</button>
                                    <button onClick={() => {handleDelete(i)}}>Delete</button>
                                </div>
                          </div>
                          <p>{note.detail}</p>
                          { editing && <EditNote handleSubmitEdit={handleSubmitEdit} handleCloseEdit={handleCloseEdit} key1={i} note={note}/> }
                      </div>
                )
              })}
            </div>
        </div>
      </>
    )
  }