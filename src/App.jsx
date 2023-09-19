import { useEffect, useState } from 'react'
import PokeCard from './components/PokeCard'
import './App.css'

function App() {
  let offset = 0
  let limit = 100
  const [response, setResponse] = useState([])
  const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then(data => setResponse(data.results))
      .catch((err) => console.warn(err));
  }, [])


  //pagination
  const [pokemonsGroup, setpokemonsGroup] = useState([])
  const pokekmonsByGroup = 10
  let indexStart = 0
  let indexEnd = 10
  const buttons = []

  const changeGroup =() => {
    indexStart
    indexEnd
    const newGroup = response.slice( )

    setpokemonsGroup( )
  }

  const renderButtons = () => {
    const numberOfButtons = limit / pokekmonsByGroup
    for (let i = 1; i < numberOfButtons; i++) {
      buttons.push((
        <button key={i} onClick={changeGroup}>{i}</button>
      ))
    }

    return buttons.map(button => (button))

  }


  return (
    <>
      <h1>Pokemons</h1>
      {renderButtons()}
      <ul>
        {
          response.map(pokeData => (
            <li key={pokeData.url}>
              <PokeCard url={pokeData.url} name={pokeData.name} />
            </li>
          ))

        }
      </ul>
    </>
  )
}

export default App
