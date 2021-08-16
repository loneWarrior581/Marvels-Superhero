import React from 'react'
import bg from '../../img/bg1.jpg'
function Character({ character }) {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={character.thumbnail.path + '.jpg'} atl='some' />
                </div>
                <h3>Name  : {character.name}</h3>
            </div>

        </div>
    )
}

export default Character
