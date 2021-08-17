import React from 'react'
import bg from '../../img/bg1.jpg'
function Character({ character }) {
    return (
        <div className="card">
            <img src={character.thumbnail.path + '.jpg'} atl='some' />
            <div className="border"></div>
            <div className="container">
                <h4><b>{character.name}</b></h4>
                <p>Marvel Super Hero</p>
            </div>

        </div >
    )
}

export default Character
