import React from 'react';
import PropTypes from 'prop-types';
import './TopBar.css';
import logo from '../assets/images/logo.png';
import ghWhite from '../assets/svg/github-mark-white.svg';
import ghDark from '../assets/svg/github-mark.svg';
import ytDark from '../assets/images/yt_icon_dark.png';
import ytLight from '../assets/images/yt_icon_light.png';

export function TopBar(props) {
  const theme = props.theme;

  return (
    <div className='top-bar'>
      <img src={logo} className='logo' />
      <div className='break' />
      <a className='img-link' href='https://github.com/DatAsianBoi123' target='_blank' rel='noreferrer'>
        <img src={theme === 'dark' ? ghWhite : ghDark} />
      </a>
      <a className='img-link' href='https://www.youtube.com/channel/UCX6-KGY2obwLm9_5N_bo3aQ' target='_blank' rel='noreferrer'>
        <img src={theme === 'dark' ? ytDark : ytLight} />
      </a>
      <button className={`theme-toggle ${theme}`} onClick={() => {
        if (theme === 'dark') props.setTheme('light');
        else if (theme === 'light') props.setTheme('dark');
      }}></button>
    </div>
  );
}

TopBar.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

