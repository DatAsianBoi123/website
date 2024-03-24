import React from 'react';
import { Project } from '../project/Project';
import PropTypes from 'prop-types';
import './Body.css';

export function Body(props) {
  return (
    <>
      <div className={`title ${props.theme}`}>
        <h1 className='name'>DatAsiqn</h1>
        <h2 className='subtitle'>Minecraft <span className='accent'>Plugin</span> and <span className='accent'>Discord Bot</span> Developer</h2>
      </div>
      <div className='heading'>
        <h1>Projects</h1>
      </div>
      <div className='content'>
        <div className='projects'>
          <Project
            title='Arcadia'
            link='https://github.com/DatAsianBoi123/ArcadiaPlugin'
            description='An up-coming rogue-lite Minecraft server'
          />
          <Project
            title='CommandCore'
            link='https://github.com/DatAsianBoi123/CommandCore'
            description='A powerful command framework for Spigot'
          />
          <Project
            title='Terraria Calamity Guide'
            link='https://terraria-bot.shuttleapp.rs/'
            description='A Discord bot designed to help you on your next Terraria Calamity playthrough'
          />
        </div>
      </div>
      <div className='heading'>
        <h1>Contact</h1>
      </div>
      <div className='content'>
        <p>
          You can contact me via <a href='https://discord.com' target='_blank' rel='noreferrer'>Discord 🡥</a>. My tag is <code>datasianboi123</code>
        </p>
      </div>
    </>
  );
}

Body.propTypes = {
  theme: PropTypes.string.isRequired,
};

