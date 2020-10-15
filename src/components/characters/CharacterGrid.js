import React from 'react'
import Spinner from '../ui/Spinner'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({ characters, isLoading }) => {
    return isLoading ? <Spinner /> : <section className='cards'>
        {characters.map(char => (
            <CharacterItem key={char.char_id} char={char} />
        ))}
    </section>
}

export default CharacterGrid
