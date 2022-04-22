import { useState,useEffect } from 'react';
import '../src/styles/above-folds.scss';
import { Characters } from './Components/Characters/Characters';
import { Contain } from './Components/Contain/Contain';
import { Logo } from './Components/Logo/Logo';
import { Navbar } from './Components/Navbar/Navbar';
import { Search } from './Components/Search/Search';

function App() {
  const [status, setStatus] =useState('')
  const [loading, setLoading]=useState(true);
  const [error, setError] =useState(false);
  const [name, setName]=useState('nameStartsWith');
  const [mode, setMode]=useState('characters');
  const [searchValue, setSearchValue]=useState('');
  const publicKey = '1c407efae20be1ec306059b1d05980e7';
  const ts = '1';
  const hash = '04f4320c7c51688d0be29c8861c084be';
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    setTimeout( () =>{
      if(!searchValue){
        fetch(`http://gateway.marvel.com/v1/public/${mode}?&offset=0&ts=${ts}&apikey=${publicKey}&hash=${hash}`)
        .then(responsive => (responsive.json()))
        .then(data => setCharacters(data.data.results))
        .catch(error => setError(true))
        
      
      }else{
        fetch(`http://gateway.marvel.com/v1/public/${mode}?${name}=${searchValue}&offset=0&ts=${ts}&apikey=${publicKey}&hash=${hash}`)
        .then(responsive => (responsive.json()))
        .then(data => setCharacters(data.data.results))
        .catch(error => setError(true))
      }
    },1000);
    setLoading(false);
    

  },[mode,searchValue,name]);
  
  console.log(characters,error,name)
  console.log(status.status)
  return (
    <div className="App">
      <Logo/>
      
      <Navbar
        setMode={setMode}
        setSearchValue={searchValue}
      />
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Contain>
        {loading && <h1>Loading...</h1>}
        {error && <h1>{`Error: ..., please contact maintenance area.`} </h1>}
        {characters.map(character =>(
          <Characters
          key={character.id}
          character={character}
          mode={mode}
          setName={setName}
          
        />
        ))}

      </Contain>
      
    </div>
  );
}

export default App;