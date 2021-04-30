import React from 'react';
import project1 from '../../Image/project1.jpg';
import project2 from '../../Image/project2.jpg';
import project3 from '../../Image/project3.jpg';
import ProjectDetails from '../ProjectDetails/ProjectDetails';


const projectData = [
    {
        image: project1,
        country: 'Maldives'
        
    },
    {
        image: project2,
        country: 'Switzerland'
        
    },
    {
        image: project3,
        country: 'Nepal'
        
    }
]


const Project = () => {
    return (
        <section className="service-container">
            <div className="text-center mt-5">
                <h5>PROJECTS</h5>
                <h1 className="text-success">Our International Tours</h1>
                <div className="d-flex justify-content-center">
                    <div className="row w-75">
                        {
                            projectData.map(project => <ProjectDetails project={project}></ProjectDetails>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;