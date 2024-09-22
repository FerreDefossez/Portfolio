import React from 'react';
import AboutMe from '../components/AboutMe';
import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        title: 'Project One',
        description: 'Description for project one.',
        image: 'https://mdbootstrap.com/img/new/standard/nature/184.webp'
    },
    {
        title: 'Project Two',
        description: 'Description for project two.',
        image: 'https://mdbootstrap.com/img/new/standard/nature/184.webp'
    }
];

const Home = () => {
    return (
        <main>
            <section id="home">
                <h2>Welcome to My Portfolio</h2>
                <p>Check out my latest projects below.</p>
            </section>
            <AboutMe />
            <h2>Projects</h2>
            <section id="projects">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                    />
                ))}
            </section>
        </main>
    );
};

export default Home;