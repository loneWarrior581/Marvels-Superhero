import './App.css';
import CharacterGrid from './components/characters/CharacterGrid';
import Header from './components/Header'
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <CharacterGrid />
    </div>
  );
}

export default App;
