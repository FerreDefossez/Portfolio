import React from 'react';

const ProjectDetail = ({ project }) => {
    return (
        <div>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <p><strong>Status:</strong> {project.status}</p>
            <p><strong>Start Date:</strong> {project.startDate}</p>
            <p><strong>End Date:</strong> {project.endDate}</p>
        </div>
    );
};

export default ProjectDetail;
