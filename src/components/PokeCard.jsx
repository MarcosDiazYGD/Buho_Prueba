import { useEffect, useState } from "react";

const PokeCard = ({ url, name, getPokemonData: sendData }) => {
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(data => setPokemon(data))
      .catch((err) => console.warn(err));
  }, [url])

  return (
    <>
      <div className="container__info--card">
        <h3>{name}</h3>
        <span>{pokemon?.id}</span>
      </div>
      <img src={pokemon?.sprites?.other["official-artwork"]?.front_default} alt={`spirte of pokemon ${name}`} />
    </>
  );
};

export default PokeCard;