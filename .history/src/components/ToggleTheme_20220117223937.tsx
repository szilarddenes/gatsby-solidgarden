import React, { useContext } from 'react';
import { ThemeContext } from 'hooks/ThemeProvider';
import sunIcon from 'assets/svg/sun.svg';
import moonIcon from 'assets/svg/moon.svg';
import styled from 'styled-components';

export const Wrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.3s all;

  &:focus {
    outline: none;
    transition: 0.3s all;
  }

  @media (max-width: 960px) {
    text-align: left;
  }

  img {
    margin-bottom: unset;
  }
`;

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper type="button" onClick={toggleTheme}>
      <img src={theme === 'light' ? moonIcon : sunIcon} alt={theme} />
    </Wrapper>
  );
};

export default ToggleTheme;