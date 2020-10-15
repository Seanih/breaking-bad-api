
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import CharGrid from './components/characters/CharGrid';
import Header from './components/ui/Header';

const App = () => {
  const [chars, setChars] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await Axios(`https://www.breakingbadapi.com/api/characters`)

      setChars(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
    <div className="container">
      <Header />
      <CharGrid isLoading={isLoading} characters={chars} />
    </div>
  );
}

export default App;
