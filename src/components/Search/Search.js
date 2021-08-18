import React, { useState } from 'react'

function Search({ getQuery }) {
    const [text, setText] = useState("");
    const onChange = (hero) => {
        setText(hero);
        getQuery(hero);
    }
    return (
        <div className="search">
            <input
                data-testid="search"
                type="text"
                placeholder="Search Your super hero here ...."
                className="form-control"
                autoFocus
                value={text}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
};
export default Search
