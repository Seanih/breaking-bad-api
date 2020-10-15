import React from 'react'
import CharItem from './CharItem'

const CharGrid = ({ characters, isLoading }) => {
    return isLoading ? <h1>Loading</h1> : <section className='cards'>
        {characters.map(char => (
            <CharItem key={char.char_id} char={char} />
        ))}
    </section>
}

export default CharGrid
