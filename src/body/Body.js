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
      <Heading text='Projects' />
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
      <Heading text='Contact' />
      <div className='content'>
        <p>
          Have any questions, or just wanna chat? You can contact me via my business email, <a href='mailto:contact@datasiqn.com'>contact@datasiqn.com</a>.
          <br />
          Feel like that&apos;s too formal? You can use <a href='https://discord.com' target='_blank' rel='noreferrer'>Discord 🡥</a>.
          My tag is <code>datasianboi123</code>.
          I will also be responding to any pull requests or issues posted on my <a href='https://github.com' target='_blank' rel='noreferrer'>GitHub 🡥</a>. Feel free to create any of those if you find an issue, or want to contribute to my projects!
          <br />
          Commissions are coming soon™.
        </p>
      </div>
    </>
  );
}

function Heading(props) {
  return <div className='heading'>
    <h1>{props.text}</h1>
  </div>;
}

Body.propTypes = {
  theme: PropTypes.string.isRequired,
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

