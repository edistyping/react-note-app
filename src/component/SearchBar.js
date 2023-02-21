

export default function SearchBar( {onChange, value} ) {
  const styleContainer = {
    height: '10vh',
    width: "70%",
    backgroundColor: "lime",

  }

  return (
    <>
      <div style={styleContainer} >
        SearchBar here...
        <input value={value} type="text" placeholder="Hi there!" onChange={(e) => onChange(e.target.value)} ></input>
      </div>
    </>
  )
}