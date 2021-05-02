import React, { Component } from "react";
import Project from "./Project";
import projects from "../projects.json";

class MyProjects extends Component {
  state = {
    projects,
  };

  // handleClick = () => {
  //   // console.log(props.url);
  //   // window.open(project.url);
  // };

  render() {
    return (
      <div className="container">
        <h2>What I've Been Working On</h2>
        <div>
          {this.state.projects.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              title={project.title}
              image={project.image}
              url={project.url}
              repo={project.repository}
              description={project.description}
              // handleClick={this.handleClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MyProjects;
