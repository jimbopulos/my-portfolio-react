import React from 'react';

function Project(props) {
  return (
    <div>
      <div className='card'>
        <div className='img-container'>
          <img src={props.image} alt={props.title} />
        </div>
      </div>
    </div>
  );
}

export default Project;
