import React from 'react'
function Character({ character }) {
    return (
        <div data-testid="card" className="card">
            <img data-testid="card-image" src={character.thumbnail.path + '.jpg'} alt="marvel action character" />
            <div className="border"></div>
            <div className="container">
                <h4 data-testid="name"><b data-testid="charName">{character.name}</b></h4>
                <p>Marvel Super Hero</p>
            </div>
        </div >
    )
}

export default Character
