import './sortFilter.css'

export default function SortFilter({handleSortType}) {
  return (
    <div className="sort-container">
        <select className='select' name="sort" id="sort" onChange={(e)=>handleSortType(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
        </select>
    </div>
  )
}
