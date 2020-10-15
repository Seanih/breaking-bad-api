
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import CharacterGrid from './components/characters/CharacterGrid';
import Header from './components/ui/Header';
import Search from './components/ui/Search';

const App = () => {
  const [chars, setChars] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await Axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

      // console.log(result.data)

      setChars(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} characters={chars} />
    </div>
  )
}

export default App;
