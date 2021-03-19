import React, { Component } from 'react';
import Project from './Project';
import projects from '../projects.json';

class MyProjects extends Component {
  state = {
    projects,
  };

  render() {
    return (
      <div>
        <h2>My Projects</h2>
        <div className='container'>
          {this.state.projects.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              title={project.title}
              image={project.image}
              url={project.url}
              repo={project.repository}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MyProjects;
