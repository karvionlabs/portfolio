import React from 'react';
import SoftwareProjects from './projects/Software';

export interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = (props) => {
    return <SoftwareProjects />;
};

export default Projects;
