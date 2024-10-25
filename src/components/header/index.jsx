import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext, themes } from "../../context";


export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  
  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <>
      <SectionHeader style={{ color: theme.color, background: theme.background }}>
        <Link to={'/'}>
          <Img src="/assets/pokeball.png" alt="Pokeball" />
        </Link>
        <Logo src="/assets/logo-pokemon.svg" alt="" />
        <StyledButtonToggler onClick={toggleTheme}>
          <Img src={theme === themes.light ? "/assets/sun.png" : "/assets/moon.png"} 
            alt={theme === themes.light ? "Sun" : "Moon"} />
        </StyledButtonToggler>
      </SectionHeader>
    </>
  );
};


const StyledButtonToggler = styled.button`
  background-color: transparent;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

const Img = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%
`;

const Logo = styled.img`
  width: 200px;
`

const SectionHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
  align-items: center;
`;
