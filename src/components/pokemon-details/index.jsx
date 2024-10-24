import axios from "axios";
import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../../context";

export const PokemonDetails = () => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const {id} = useParams()
  const { theme } = useContext(ThemeContext)

  const getDetails = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

      setPokemonDetails(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados dos Pokémons", error);
    }
  };
  useEffect(() => {
    getDetails(id);
  }, [id]);

  if (!pokemonDetails) {
    return <p>Carregando....</p>;
  }

  return (
    <main style={{color: theme.color, background: theme.background}}>
      <Section>
        <Panel style={{color: theme.color, background: theme.background}}>
          <h5>#{pokemonDetails.id}</h5>
          <img src={pokemonDetails.sprites.front_default} alt="" />
          <h3>{pokemonDetails.name}</h3>
          
          <p>
            {pokemonDetails.types[0].type.name}
            {pokemonDetails.types[1] ? `/ ${pokemonDetails.types[1].type.name} ` : ""}
          </p>
        </Panel>
        <Title>Abilities</Title>
        <Abilities>
           <Ability>{pokemonDetails.abilities[0].ability.name}</Ability>
           <Ability>{pokemonDetails.abilities[1] ? `  ${pokemonDetails.abilities[1].ability.name} ` : ""}</Ability> 
        </Abilities>
        <Title>Attacks</Title>
        <Div >
          {pokemonDetails.moves.map((movesInfo, index) => (
            <Moves key={index}style={{color: theme.color, background: theme.background}}> {movesInfo.move.name}</Moves>
          ))}
        </Div>

        <StyleLink to={'/'}style={{color: theme.color, background: theme.background}}>Volta para o início</StyleLink>
      </Section>
    </main>
  );
};

const Section = styled.section`
  padding: 30px;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #fff;
  box-shadow: 5px 5px 10px black;
`;

const Moves = styled.p`
  font-size: 14px;
  border-radius: 20px;
  background: #d3dded;
  padding: 8px;
`;

const Div = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
`;

const Title = styled.h3`
  text-align: center;
`;
const Abilities = styled.div` 
  display: flex;
  justify-content: center;
`;
const Ability = styled.p`
    padding: 10px;
    font-weight: 400;
    margin-top: 0;
`;

const StyleLink = styled(Link)`
  display: flex;
  justify-content: center;
  border: 1px solid;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;
  font-weight: 700;
`