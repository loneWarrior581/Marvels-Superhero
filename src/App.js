import axios from "axios";
import React, { useState, useEffect } from "react";
import './App.css';
import CharacterGrid from './components/characters/CharacterGrid';
import Header from './components/Header'
import Search from './components/Search';
const api_key = "4d4201ad31d7bfaf99cc7ab62764e7f7";
const hash = "126aa0f2fd94045e4d889a4aaca3befa";
const limit = 40;

// PUBLIC KEY: 4d4201ad31d7bfaf99cc7ab62764e7f7
// PRIVATE KEY : 396deaa8a67455411890d9440082926a2cecd305
// const base_url = "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=thorlimit=30&apikey=4d4201ad31d7bfaf99cc7ab62764e7f7";
function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {

    const fetchItems = async () => {
      if (query === '') {

        const result = await axios.get(
          `https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=${limit}&apikey=${api_key}&hash=${hash}`
          // `https://www.breakingbadapi.com/api/characters/?name=${query}`
        );
        console.log(result.data.data.results);
        setItems(result.data.data.results);
      }
      else {
        const result = await axios.get(
          `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&ts=1&limit=${limit}&apikey=${api_key}&hash=${hash}`
        );
        console.log(result.data.data.results);
        setItems(result.data.data.results);
      }
      setIsLoading(false);
    };
    fetchItems();
  }, [query])

  return (
    <div className="App">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} superHeros={items} />
    </div>
  );
}

export default App;
