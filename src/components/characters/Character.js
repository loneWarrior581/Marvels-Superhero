import React from 'react'
function Character({ character }) {
    return (
        <div className="card">
            <img src={character.thumbnail.path + '.jpg'} alt="marvel action character" />
            <div className="border"></div>
            <div className="container">
                <h4><b>{character.name}</b></h4>
                <p>Marvel Super Hero</p>
            </div>

        </div >
    )
}

export default Character
