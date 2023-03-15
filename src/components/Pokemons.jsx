/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const Pokemons = () => {
  const myPokemons = useSelector((state) => state.pokemon);

  const dispatch = useDispatch();

  const myfetch = async () => {
    try {
      let res = await fetch("https://pokeapi.co/api/v2/pokemon");
      if (res.ok) {
        let data = await res.json();

        dispatch({
          type: "ALL_POKEMON",
          payload: data.results,
        });
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error, "catch error");
    }
  };
  useEffect(() => {
    myfetch();
  }, []);
  return (
    <>
      <div className="all-container">
        {myPokemons?.map((pokemon, index) => (
          <div key={index}>
            <h1> {pokemon.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pokemons;
