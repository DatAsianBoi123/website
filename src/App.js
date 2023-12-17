import React, { useState } from 'react';
import { Body } from './Body';
import { TopBar } from './TopBar';
import { setDark, setLight } from './colors';

export function App() {
  const [theme, setTheme] = useState(window.localStorage.getItem('theme') === 'light' ? 'light' : 'dark');

  changeTheme(theme);

  return (
    <>
      <TopBar theme={theme} setTheme={newTheme => {
        changeTheme(newTheme);
        setTheme(newTheme);
      }} />
      <Body theme={theme} />
    </>
  );
}

function changeTheme(theme) {
  if (theme === 'dark') {
    window.localStorage.setItem('theme', theme);
    setDark();
  } else if (theme === 'light') {
    window.localStorage.setItem('theme', theme);
    setLight();
  }
}

