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
          <h6>
            Deployed URL{" "}
            <a
              className="my-link"
              href={props.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              here <i className="fas fa-external-link-alt"></i>
            </a>
          </h6>
          <h6>
            Repository{" "}
            <a
              className="my-link"
              href={props.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              here <i className="fas fa-external-link-alt"></i>
            </a>
          </h6>
          <h5>{props.description}</h5>
        </div>
      </div>
    </div>
  );
}

export default Project;
