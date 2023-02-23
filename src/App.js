import { useState, useEffect } from 'react';

import './App.css';

import SearchBar from './component/SearchBar'
import Notes from './component/Notes'
import FilterBar from './component/FilterBar'
import AddNote from './component/AddNote'

function App() {
  
  const [search, setSearch] = useState(''); // Category: Work, Personal, Diary, Temp (uses sessionStorage)
  const [category, setCategory] = useState('all'); // Category: Work, Personal, Diary, Temp (uses sessionStorage)
  
  // const [notes, setNotes] = useState([]);
  const testNotes = [{ title: "111", date: '1/1/2023', category: "work", detail: "Detail here" }, {title: "222", date: '1/1/2024', category: "personal", detail: "sdfadsf"}];
  const [notes, setNotes] = useState([]);
  
  useEffect(() => {  
    // Read from localStorage initially
    const retrieveNotes = localStorage.getItem('notes');

    // Set to 'Notes' if there is data in localStorage
    if (retrieveNotes !== null) {
      const initialNotes = JSON.parse(retrieveNotes)
      console.log('Data loaded from localStorage...')
      console.log(initialNotes)
      setNotes(initialNotes);
    }
    else {
      setNotes([]);
    }
  }, []);

  // To Do: Need to save the data to 'notes' or localStorage
  const handleSubmit = (temp) => {

    setNotes(prevArray => [...prevArray, temp], (updatedArray) => {
      // Callback to save to localStorage
      localStorage.setItem('notes', JSON.stringify(updatedArray));
    }) 

  }

  const handleEdit = (i, temp) => {
    const updatedNotes = notes.map((note, ii) => {      
      if (ii === i) {
        return temp
      }
      return note
    })
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setNotes(updatedNotes);  
  }

  const handleDelete = (i) => {
    const updatedNotes = notes.filter((note, index) => index !== i)
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setNotes(updatedNotes);  
  }


  return (
    <div className="App">
      
        {/* <SearchBar onChange={setSearch} value={search} /> */}
        <AddNote handleSubmit={handleSubmit} />
        <FilterBar onClick={setCategory} category={category} />
        <Notes key={notes} notes={notes} category={category} handleEdit={handleEdit} handleDelete={handleDelete}/>

    </div>
  );
}

export default App;
