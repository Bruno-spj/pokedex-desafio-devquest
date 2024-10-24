/* eslint-disable react/prop-types */
import styled from "styled-components";
import axios from "axios";

export const LoadMoreButton = ({ setPokemons }) => {
  // Função para carregar mais 10 Pokémons
  const fetchMorePokemon = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=10`);
      const results = response.data.results;
      
      const morePokemonData = await Promise.all(
        results.map(pokemon => axios.get(pokemon.url).then(res => res.data))
      );

      setPokemons(prevPokemons => [...prevPokemons, ...morePokemonData]); // Adiciona mais 10 Pokémons à lista existente
    } catch (error) {
      console.error("Erro ao buscar mais Pokémons", error);
    }
  };

  return (
    <ButtonCarregarMais onClick={fetchMorePokemon}>
      Carregar mais
    </ButtonCarregarMais>
  );
};

// Estilos do botão usando styled-components
const ButtonCarregarMais = styled.button`
  display: flex;
  margin: 0 auto;
  border-radius: 5px;
  border: none;
  padding: 10px 20px;
  margin-bottom: 30px;
  font-size: 14px;
  font-weight: 600;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #90f5a8;
  }
`;
