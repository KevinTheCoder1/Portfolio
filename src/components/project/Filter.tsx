import { useContext, useState } from "react";
import MainContext from "../../context/MainContext";
import {ChangeEvent} from "react";

interface FilterProps {
    filterFunc: (_1:string) => void
}

function Filter({filterFunc}: FilterProps): JSX.Element {
    const {initialState} = useContext(MainContext)
    const [typeFilter, setTypeFilter] = useState("All")
    
    const filterHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setTypeFilter(event.target.value)
        filterFunc(event.target.value)
    }

    return (
        <div className="filter-main container">
            <select onChange={filterHandler} value={typeFilter} className="filter-dropdown filter">
                <option key="All">All</option>
                {initialState.filterOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                ))}
            </select>
        </div>
    )
}

export default Filter;