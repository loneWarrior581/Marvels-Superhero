import React from 'react'

function Search() {
    return (
        <div className="search">
            <form>
                <input
                    type="text"
                    placeholder="Search Your character here ...."
                    className="form-control"
                    autoFocus
                />
            </form>
        </div>
    )
}

export default Search
