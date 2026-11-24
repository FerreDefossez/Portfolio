import AboutMe from "../components/AboutMe";
import ProjectCard from "../components/ProjectCard";
import "./Home.css";

const projects = [
  {
    title: "Eurostar Monitor",
    description: "Automatische controle van Eurostar tickets.",
    image: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
  },
  {
    title: "Home Assistant",
    description: "MQTT meldingen en automatiseringen.",
    image: "https://mdbootstrap.com/img/new/standard/nature/185.webp",
  },
  {
    title: "Proxmox Homelab",
    description: "Virtuele servers en containers.",
    image: "https://mdbootstrap.com/img/new/standard/nature/186.webp",
  },
  {
    title: "Portfolio Website",
    description: "Persoonlijke website gebouwd in React.",
    image: "https://mdbootstrap.com/img/new/standard/nature/187.webp",
  },
];

function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Ferre Defossez</h1>

        <p>
          ICT Helpdeskmedewerker met een passie voor Linux,
          Home Assistant, automatisatie en systeembeheer.
        </p>

        <a href="#projects" className="hero-btn">
          Bekijk mijn projecten
        </a>
      </section>

      <AboutMe />

      <section id="projects" className="projects-section">
        <h2>Mijn Projecten</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
