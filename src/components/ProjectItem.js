import React from "react";

function ProjectItem({ name, about, technologies }) {
  const showTechnologies = () => technologies.map(technology => <span key={name + technology}>{technology}</span>)
  return ( 
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {showTechnologies()}
      </div>
    </div>
  );
}

export default ProjectItem;
