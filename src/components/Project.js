import React from "react";

function Project(props) {
  return (
    <div>
      <div className="card">
        <div>
          <h3>{props.title}</h3>
        </div>
        <div className="img-container">
          <img
            className="rounded img-fluid project-img"
            src={props.image}
            alt={props.title}
            // onClick={() => props.handleClick()}
          />
        </div>
        <div className="info">
          <a
            className="my-link"
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Deployed URL <i className="fas fa-external-link-alt"></i>
          </a>
          <span> | </span>
          <a
            className="my-link"
            href={props.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository <i className="fas fa-external-link-alt"></i>
          </a>
          <hr />
          <p>What: {props.description}</p>
          <p>Technology: {props.tech}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
