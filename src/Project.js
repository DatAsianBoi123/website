import React from 'react';
import PropTypes from 'prop-types';
import './Project.css';

export function Project(props) {
  return (
    <div className='project'>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <a href={props.link} target='_blank' rel='noreferrer'>Learn more</a>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

