/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = ({ pokemon }) => {
  return (
    <Link to={`/details/${pokemon.id}`}> {/* Aqui passa o ID dinâmico */}
      <Div>
        <h3>#{pokemon.id}</h3>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h3>{pokemon.name}</h3>
        <Type>
          {pokemon.types[0].type.name}
          {pokemon.types[1] ? ` / ${pokemon.types[1].type.name}` : ""}
        </Type>
      </Div>
    </Link>
  );
};

const Div = styled.div`
  background-color: gainsboro;
  width: 200px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  box-shadow: 5px 5px 10px black;

  &:hover {
    background-color: #90f5a8;
    transform: scale(1.05);
  }
`;

const Type = styled.p`
  font-size: 14px;
  font-weight: 500;
`;
