import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Card } from '../../components/cards/index'; 
import styled from 'styled-components';
import { ThemeContext } from "../../context";
import { LoadMoreButton } from '../../components/button/index'; 

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]); // Estado para armazenar os Pokémons
  const { theme } = useContext(ThemeContext);

  // Função para buscar os primeiros 10 Pokémons
  const getPokemonData = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10`);
      const results = response.data.results;
      
      console.log(response)
      const pokemonData = await Promise.all(
        results.map(pokemon => axios.get(pokemon.url).then(res => res.data))
      );

      setPokemons(pokemonData); // Define os primeiros 10 Pokémons
    } catch (error) {
      console.error("Erro ao buscar dados dos Pokémons", error);
    }
  };

  useEffect(() => {
    getPokemonData(); // Carrega os 10 primeiros Pokémons ao montar o componente
  }, []);

  return (
    <main style={{ color: theme.color, background: theme.background }}>
      {pokemons.length > 0 ? (
        <>
          <Section>
            {pokemons.map((pokemon) => (
              <Card key={pokemon.id} pokemon={pokemon} />
            ))}
          </Section>
          {pokemons.length <= 10 && ( // Exibe o botão se houver 10 ou menos Pokémons
            <LoadMoreButton setPokemons={setPokemons} /> // Componente de botão separado
          )}
        </>
      ) : (
        <p>Carregando Pokémons...</p>
      )}
    </main>
  );
};

// Estilos do componente usando styled-components
const Section = styled.section`
  display: flex;
  justify-content: center;
  gap: 80px;
  text-align: center;
  flex-wrap: wrap;
  padding: 50px;
`;
