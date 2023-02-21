import { useState, useEffect } from 'react';


export default function AddNote( {handleSubmit, value} ) {
    const styleContainer = {
      height: '10vh',
      width: "70%",
      backgroundColor: "blue",
    }
    const formContainer = {
        position: 'absolute',
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)", 

        height: '50vh',
        width: "60vw",
        backgroundColor: "green",
    }
  

    const [Adding, setAdding] = useState(false);

    const formSubmit = (e) => {    
        e.preventDefault(); 
        setAdding(false);

        const temp = {title: e.target.title.value, category: e.target.category.value, detail: e.target.detail.value}

        handleSubmit(temp);

    }
    // create a funciton here that change setAdding then call handleSubmit()


    /*
        When 'Add' button is clicked, open a form to get input
            - Category, subject, contents 
        When 'Submit' is clicked, add it to the Local Storage 
    */
    return (
      <>
        <div style={styleContainer} >
            <button onClick={(e) => setAdding(true)}>Add a Note</button>

            {   
                Adding &&
                <form style={formContainer} onSubmit={formSubmit}>

                    <button onClick={(e) => setAdding(false)} >X</button>
                    <h2> Geeks For Geeks </h2>
                    <h3> Sign-up Form </h3>
                    <div>
                        <label >
                        Subject:
                        </label><br/>
                        <input name="title" type="text" required /><br/>

                        <label >
                        Category:
                        </label><br/>
                        <select name="category" id="cars">
                            <option value="personal">Personal</option>
                            <option value="work">Work</option>
                            <option value="misc">Misc</option>
                        </select>
                    </div>

                    <label >
                    Contents:
                    </label><br/>
                    <input name="detail" type="text" placeholder='Provide any details here' /><br/>

                    <button type="submit">Submit</button>
                </form>
            }

        </div>
      </>
    )
  }