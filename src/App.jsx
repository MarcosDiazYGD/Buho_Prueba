import { useEffect, useState } from 'react'
import PokeCard from './components/PokeCard'
import './App.css'
import Searcher from './components/Searcher'

function App() {
  const [pokemonsGroup, setpokemonsGroup] = useState([])
  const [pokemonData, setPokemonData] = useState({})
  const [darkTheme, setDarkTheme] = useState(false)
  const [response, setResponse] = useState([])
  const [buttons, setButtons] = useState([])

  let offset = 0
  let limit = 101
  const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

  // PAGINATION //

  const pokemonsByGroup = 10
  let indexStart
  let indexEnd

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then(data => setResponse(data.results))
      .catch((err) => console.warn(err));
  }, [])

  const changeGroup = (index) => {
    indexStart = (index - 1) * pokemonsByGroup
    indexEnd = index * pokemonsByGroup

    const newGroup = response.slice(indexStart, indexEnd)
    setpokemonsGroup(newGroup)
  }

  const renderButtons = () => {
    const numberOfButtons = Math.ceil(limit / pokemonsByGroup)
    const buttonsGroup = []
    for (let i = 1; i <= numberOfButtons; i++) {

      buttonsGroup.push((<button key={i} onClick={() => changeGroup(i)} >{i}</button>))
    }
    return setButtons(buttonsGroup)
  }

  useEffect(() => {
    response && changeGroup(1)
    renderButtons()
  }, [response])

  const getPokemonData = (data) => {
    setPokemonData(data)
  }
  return (
    <div className={darkTheme ? 'App dark-theme' : 'App'}>

      <div className='container__nav'>
        <div></div>
        <h1>POKEMONS</h1>
        <button onClick={() => setDarkTheme(prev => prev = !prev)} className='button__dark-theme'><i className='bx bx-moon bx-md'></i></button>
      </div>

      <Searcher />

      <div className="container__buttons--pagination">
        {response ? buttons.map(button => (button)) : null}
      </div>

      <ul className='container__cards'>
        {pokemonsGroup ?
          pokemonsGroup?.map(pokeData => (
            <li key={pokeData.url} className='card'>
              <PokeCard url={pokeData.url} name={pokeData.name} getPokemonData={getPokemonData} />
            </li>
          )) : <div class="loader"></div>
        }
      </ul>

      <div className="container__buttons--pagination">
        {buttons.map(button => (button))}
      </div>

    </div>
  )
}

export default App
