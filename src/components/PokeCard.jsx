import { useEffect, useState } from "react";

const PokeCard = ({ url, name }) => {
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(data => setPokemon(data))
      .catch((err) => console.warn(err));
  }, [])

  return (
    <div>
      <h3>{name}</h3>
      <span>{pokemon?.id}</span>
      <img src={pokemon?.sprites?.other["official-artwork"]?.front_default} alt={`spirte of pokemon ${name}`} />
    </div>
  );
};

export default PokeCard;