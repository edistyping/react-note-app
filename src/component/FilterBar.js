
export default function FilterBar( {onClick, value} ) {
  const styleContainer = {
    height: '3vh',
    width: "70%",
    backgroundColor: "red",

  }

  return (
    <>
      <div style={styleContainer} >
        FilterBar here...
        <button onClick={(e) => onClick("all") }>All</button>
        <button onClick={(e) => onClick("work") }>Work</button>
        <button onClick={(e) => onClick("personal") }>Personal</button>
        <button onClick={(e) => onClick("misc") }>Misc</button>        
      </div>
    </>
  )
}