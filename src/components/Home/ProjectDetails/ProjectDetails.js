import React from 'react';

const ProjectDetails = ({ project }) => {
    return (
        <div className='col-md-4 text-center'>
            <div className="mt-5">
                <img src={project.image} alt="" />
                <h4 className="mt-4 mb-4">{project.country}</h4>
            </div>
        </div>
    );
};

export default ProjectDetails;