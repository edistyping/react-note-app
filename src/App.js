import { useState, useEffect } from 'react';

import './App.css';

import SearchBar from './component/SearchBar'
import Notes from './component/Notes'
import FilterBar from './component/FilterBar'
import AddNote from './component/AddNote'

function App() {
  
  const [search, setSearch] = useState(''); // Category: Work, Personal, Diary, Temp (uses sessionStorage)
  const [category, setCategory] = useState('all'); // Category: Work, Personal, Diary, Temp (uses sessionStorage)
  
  //  const [notes, setNotes] = useState([]);
  const testNotes = [{ title: "111", category: "work", detail: "Detail here" }, {title: "222", category: "personal", detail: "sdfadsf"}];
  const [notes, setNotes] = useState(testNotes);
  
  useEffect(() => {    
    // Read from localStorage initially
      // var initialNotes = localStorage.getItem('notes');
      // initialNotes = JSON.parse(initialNotes)
      // console.log(typeof(initialNotes))
      // console.log(Array.isArray(initialNotes))
      // console.log(initialNotes)
      // setNotes(initialNotes);
  }, []);

  // update localstorage but probably in useEffect(). Do same for handleEdit
  useEffect(() => {
    // localStorage.setItem('notes', JSON.stringify(notes));
    console.log("notes is updated")
  }, [notes]);


  const handleSubmit = (temp) => {
    // Need to save the data to 'notes' or localStorage
    alert("handlesubmit called...")
    alert(JSON.stringify(temp));

    setNotes(prevArray => [...prevArray, temp]) // Error here

  }

  const handleEdit = (i, temp) => {
    const updatedNotes = notes.map((note, ii) => {      
      if (ii === i) {
        return temp
      }
      return note
    })
    setNotes(updatedNotes);  
  }

  const handleDelete = (i) => {

    const updatedNotes = notes.filter((note, index) => index !== i)
    setNotes(updatedNotes);  
  }


  return (
    <div className="App">
      Category: {category} <br/>
      Notes: {JSON.stringify(notes)}
      <SearchBar onChange={setSearch} value={search}  />
      <AddNote handleSubmit={handleSubmit} />
      
      <FilterBar onClick={setCategory} value={category} />
      <Notes key={notes} notes={notes} category={category} handleEdit={handleEdit} handleDelete={handleDelete}/>



    </div>
  );
}

export default App;
