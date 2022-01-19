import React, { useContext } from 'react';
import { ThemeContext } from 'hooks/ThemeProvider';
import sunIcon from 'assets/svg/sun.svg';
import moonIcon from 'assets/svg/moon.svg';
import { Wrapper } from './styles';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper type="button" onClick={toggleTheme}>
      <img src={theme === 'light' ? moonIcon : sunIcon} alt={theme} />
    </Wrapper>
  );
};

export default ToggleTheme;