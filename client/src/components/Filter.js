import "./filter.css"

function Filter({onClear, fillRoom, fillGuest}) {
    return (
        <div>
            <div className="f-div">
                <select className="f-input" name="filter" onChange={fillRoom}>
                    <option value="All">All type</option>
                    <option value="Standard">Standard</option>
                    <option value="Suite">Suite</option>
                    <option value="Villa">Villa</option>
                </select>
                {/* <select className="" name="filter" onChange={fillGuest}>
                    <option value="all">Select Guest</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                </select> */}
                <button onClick={onClear} className="f-btn">clear</button>
            </div> 
        </div>
    )
}

export default Filter
