import './dayFilter.css'

export default function Dayfilter({setFilterMode,setFilterType ,filterType ,filterMode}) {

  const handleFilter = (e)=>{
    setFilterType(e.target.value)
    setFilterMode(true)
  }
  return (
    <div className="day-container">
        <select className='day-select' name="sort" id="sort" onChange={handleFilter}>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
        </select>
        
          {filterType==='week'?<div className="day-input-container"></div>
          :filterType==='month'?<div className="day-input-container"></div>
          :filterType==='year'?<div className="day-input-container"></div>
          :<div></div>}
        

    </div>
  )
}
