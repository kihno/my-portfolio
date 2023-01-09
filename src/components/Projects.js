import React from "react";
import Navbar from './Navbar';
import Logo from  '../images/taskmaster.png';
import '../styles/Projects.css';

const Projects = () => {
    let projects = [
        {
          title: 'Project Title',
          description: 'This is a description of the project. I will also explain what techniques I used to build this application.',
          image: Logo,
        },
        {
          title: 'Project Title',
          description: 'This is a description of the project. I will also explain what techniques I used to build this application.',
          image: Logo,
        },
        {
          title: 'Project Title',
          description: 'This is a description of the project. I will also explain what techniques I used to build this application.',
          image: Logo,
        },
        {
          title: 'Project Title',
          description: 'This is a description of the project. I will also explain what techniques I used to build this application.',
          image: Logo,
        },
        {
          title: 'Project Title',
          description: 'This is a description of the project. I will also explain what techniques I used to build this application.',
          image: Logo,
        },
        {
          title: 'Project Title',
          description: 'This is a description of the project. I will also explain what techniques I used to build this application.',
          image: Logo,
        },
        {
          title: 'Project Title',
          description: 'This is a description of the project. I will also explain what techniques I used to build this application.',
          image: Logo,
        },
        {
          title: 'Project Title',
          description: 'This is a description of the project. I will also explain what techniques I used to build this application.',
          image: Logo,
        },
        {
          title: 'Project Title',
          description: 'This is a description of the project. I will also explain what techniques I used to build this application.',
          image: Logo,
        },
      ];

    return (
        <main>
            <Navbar />
            <h1>Projects</h1>
            <section className='projectContainer'>
                {projects.map((project, index) => {
                    return <div className='project' key={index}>
                                <h3>{project.title}</h3>
                                <div className='content'>
                                    <p>{project.description}</p>
                                        <div className="buttons">
                                            <button>Live Site</button>
                                            <button>Repo</button>
                                        </div>
                                </div>
                                <img src={project.image} alt={project.title}></img>
                            </div>
                })}

            </section>
        </main>
    )
}

export default Projects;