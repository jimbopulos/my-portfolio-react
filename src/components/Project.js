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
          <h6>
            Access deployed application URL{' '}
            <a className='my-link' href={props.url}>
              here <i className='fas fa-external-link-alt'></i>
            </a>
          </h6>
          <h6>
            Access the {props.title} repository{' '}
            <a className='my-link' href={props.repo}>
              here <i className='fas fa-external-link-alt'></i>
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Project;
