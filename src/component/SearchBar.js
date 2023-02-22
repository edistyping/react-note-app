import '../App.css'

export default function SearchBar( {onChange, value} ) {
  const styleContainer = {
    maxHeight: '5vh',
    width: "70%",
    backgroundColor: "red",
    marginTop: "2%",

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