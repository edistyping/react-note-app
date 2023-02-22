# Note Taking App using React! 

Idea + Goals: 
1. Do not use Database... Instead use LocalStorage for saving contents. 

To Do: 
1. Searching - Search both title and detail 


Q. How to get inputs? Is there a library(?)
    - ctrl + v 
    - picture included 
    - 
Q. How to store notes including category to localstorage when it's only key-value? Can the value be an object?  

Q. How should the data be passed around? 


Issue: 
1. localStorage issues... 
    - At initial, 'note' is initalized to []
        - Problem is this will trigger useEffect[note] which will add [] to existing localstorage
    Solution 1: Remove localstorage.setItem from useEffect[notes] and add it to handle functions 

2. Set limits (localstorage) to 24

- Don't implement SearchBar... but study the logic 