import React from 'react';

function Project(props) {
  return (
    <div>
      <div className='card'>
        <div>
          <h3>{props.title}</h3>
        </div>
        <div className='img-container'>
          <img
            className='rounded img-fluid'
            src={props.image}
            alt={props.title}
            // onClick={() => props.handleClick()}
          />
        </div>
        <div className='info'>
          <ul>
            <li>
              Access deployed application URL{' '}
              <a className='my-link' href={props.url}>
                here
              </a>
            </li>
            <li>
              Access the {props.title} repository{' '}
              <a className='my-link' href={props.repo}>
                here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
