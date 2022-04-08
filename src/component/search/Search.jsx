import './search.css'

export default function Search({handleSearchFilter}) {

  return (
    <div className='search-container'>
        <i className="search-icon fa-solid fa-magnifying-glass"></i>
        <input className='search-text' type="text" placeholder='Type to search...' onChange={(e)=>handleSearchFilter(e.target.value)}/>
    </div>
  )
}
