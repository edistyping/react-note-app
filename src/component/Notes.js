import { useState, useEffect } from 'react';

import Note from './Note'
import EditNote from './EditNotes'


export default function Notes( {handleEdit, handleDelete, notes, category} ) {
    const styleContainer = {
      height: '100%',
      width: "100%",
      backgroundColor: "skyblue",
    }
    const noteContainer = {
        height: '100%',
        width: "auto",
        backgroundColor: "pink",
      }
    
    var selectedNotes;
    if (category === "all")
      selectedNotes = notes;
    else {
        selectedNotes = notes.filter(obj => {
            return obj.category === category
        })
    }  

    const handleSubmitEdit = (i, temp) => {
      handleEdit(i, temp)
    }

    console.log("lenght: " + selectedNotes.length)
    console.log(selectedNotes)
    console.log(Array.isArray(selectedNotes))
    console.log(typeof(selectedNotes))

    return (
      <>
        <div style={styleContainer} >
            <p>Note Here... {selectedNotes.length} </p>
            <p>category: {category}</p>
            <br/>
            {selectedNotes.map((note, i) => {
                return(
                      <div style={noteContainer} key={i} >
                          <div>
                              <h3>({i}) {note.title} - {note.category}</h3>
                              <div>
                                  <EditNote handleSubmitEdit={handleSubmitEdit} key1={i} note={note}/>
                                  <button onClick={() => {handleDelete(i)}}>Delete</button>
                              </div>
                          </div>
                          <p>{note.detail}</p>
                      </div>
                )
            })

            }
   
        </div>
      </>
    )
  }