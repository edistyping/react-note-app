import '../App.css'

export default function FilterBar( {onClick, category} ) {
  const styleContainer = {
    height: '3vh',
    width: "100%",
    backgroundColor: "yellow",
    color: "black",
  }

  // Apply different class if it's selected. ie...matches 'category'

  return (
    <>
      <div style={styleContainer} >
        <div className='FilterBar-Container'>          
          <button className={category === 'all' ? 'FilterButton-Selected0' : ''} value="all" onClick={(e) => onClick("all") }>All</button>
          <button className={category === 'work' ? 'FilterButton-Selected1' : ''} onClick={(e) => onClick("work") }>Work</button>
          <button className={category === 'personal' ? 'FilterButton-Selected2' : ''} onClick={(e) => onClick("personal") }>Personal</button>
          <button className={category === 'misc' ? 'FilterButton-Selected3' : ''} onClick={(e) => onClick("misc") }>Misc</button>        
        </div>
      </div>
    </>
  )
}