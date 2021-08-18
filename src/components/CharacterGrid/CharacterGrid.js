import React from 'react'
import Character from '../Character/Character'
import gif from '../../img/spinner.gif'
function CharacterGrid({ isLoading, superHeros }) {
    return isLoading ? (
        <div className="spinner">
            <img src={gif} alt="Loader" />
        </div>
    ) : (
        <div className="cards">
            {superHeros.map((hero) => (
                <Character key={hero.id} character={hero} />
            ))}
        </div>
    );
}

export default CharacterGrid
