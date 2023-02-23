# Note Taking App using React! 

![alt text](https://github.com/edistyping/react-note-app/blob/master/src/notes-app-ui.png?raw=true)


Idea + Goals: 
1. Do not use Database including SQLite this time... Instead use LocalStorage for saving contents and limit it up to 24 items (hint: LRU cache) 

To Do: 
1. Searching - Search both title and detail 

Issue: 
1. localStorage issues... 
    - At initial, 'note' is initalized to []
        - Problem is this will trigger useEffect[note] which will add [] to existing localstorage
    Solution 1: Remove localstorage.setItem from useEffect[notes] and add it to handle functions 
    Solution 2 (Done; needs testing): In useEffect[notes], have an if statement to not save if it's empty (due to first time visiting). 

2. Set limits (localstorage) to 24
    = Add a date to an object that goes into localstorage
    = Use that date as LRU cache 
        - if empty slot, then insert. if not, replace the oldest one 

3. Two forms (Add/edit) needs UI update due to overlapping on two 'absolute' positions. 

- Don't implement SearchBar... but study the logic 


1. If it's initial load, read data from localStorage
    - useEffect[]

2. Everytime there is an update, push the new data to localStorage. 
    - useEffect[notes]
    
    Q. But how do I skip the first load? 
