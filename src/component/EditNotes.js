import { useState, useEffect } from 'react';


export default function EditNote( {handleSubmitEdit, key1, note} ) {
    const styleContainer = {
      height: 'auto',
      width: "auto",
      backgroundColor: "blue",
    }
    const formContainer = {
        position: 'absolute',
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)", 

        height: 'auto',
        width: "auto",
        backgroundColor: "green",
    }
  
    const [Editing, setEditng] = useState(false);
    const [title, setTitle] = useState(note.title);
    const [category, setCategory] = useState(note.category);
    const [detail, setDetail] = useState(note.detail);


    // pass this back to parent
    const handleSubmit2 = (e) => {    
        e.preventDefault(); 
        setEditng(false);

        const temp = {title: e.target.title.value, category: e.target.category.value, detail: e.target.detail.value}
        handleSubmitEdit(key1, temp)
    }

    /*
        When 'Add' button is clicked, open a form to get input
            - Category, subject, contents 
        When 'Submit' is clicked, add it to the Local Storage 
    */
    return (
      <>
        <div style={styleContainer} >
            <button onClick={(e) => setEditng(true)}>Edit</button>

            {   
                Editing &&
                <form style={formContainer} onSubmit={handleSubmit2}>
                {/*when user submit the form , handleSubmit()
                    function will be called .*/}
                <button onClick={(e) => setEditng(false)} >X</button>
                <h2> ({key1}) - Geeks For Geeks </h2>
                <h3> Sign-up Form </h3>
                    <div>
                        <label >
                        Subject:
                        </label><br/>
                        <input name="title" type="text" required value={title} onChange={(e) => setTitle(e.target.value)} /><br/>

                        <label >
                        Category:
                        </label><br/>
                        <select name="category" id="category" onChange={(e) => setCategory(e.target.value)} value={category}>
                            <option value="personal">Personal</option>
                            <option value="work">Work</option>
                            <option value="misc">Misc</option>
                        </select>


                    </div>

                    <label >
                    Contents:
                    </label><br/>
                    <input name="detail" type="text" placeholder='Provide any details here' value={detail} onChange={(e) => setDetail(e.target.value)} /><br/>

                    <button type="submit">Submit</button>
                </form>
            }

        </div>
      </>
    )
  }