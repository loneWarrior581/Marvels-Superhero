import React from 'react'
import Character from './Character'

function CharacterGrid({ isLoading, superHeros }) {
    return isLoading ? (
        <h1>Loading ......</h1>
    ) : (
        <div className="cards">
            {superHeros.map((hero) => (
                <Character key={hero.id} character={hero} />
            ))}
        </div>
    );
}

export default CharacterGrid
