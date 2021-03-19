import React from 'react';

function Project(props) {
  return (
    <div>
      <div className='card'>
        <h3>{props.title}</h3>
        <div className='img-container'>
          <img
            src={props.image}
            alt={props.title}
            onClick={() => props.activateURL()}
          />
        </div>
        <div className='info'>
          <ul>
            <li>
              Access the {props.title} repository <a href={props.repo}>here</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
