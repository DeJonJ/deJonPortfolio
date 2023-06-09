import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./ProjectsSection.css";

function ProjectsSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          gsap.to(contentRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          });
        }
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.unobserve(sectionRef.current);
    };
  }, []);

  const projects = [
    {
        name: "Ortho Website(discontinued)",
        description:
          "Developed a WordPress website for a local orthodontist, leveraging HTML, CSS, PHP, and JavaScript. Implemented third-party plugins, including a booking API for appointment scheduling, Advanced Custom Fields (ACF) for content management, and integrated Google Maps and social media feeds. Customized the booking API to enable seamless appointment booking and management, leveraging ACF to create user-friendly interfaces for content updates, treatments showcase, testimonials, and promotions. Integrated Google Maps for easy navigation to the orthodontist's location and incorporated social media feed integration for showcasing updates and patient success stories. Ensured responsiveness and cross-browser compatibility for optimal performance and accessibility.",image:
          "https://t3.ftcdn.net/jpg/02/67/46/60/360_F_267466037_n357KQ7qxOnUd7FstmkE4EfbObvVZtEC.jpg"
      },
    {
      name: "Ecommerce Website WIP",
      description: "Ecommerce store being built with React, Redux, Typescript, Node.js, Express.js, MongoDB, Stripe API, OAuth, Material UI, and AWS.",
      github: "https://github.com",
      image:
        "https://t3.ftcdn.net/jpg/02/67/46/60/360_F_267466037_n357KQ7qxOnUd7FstmkE4EfbObvVZtEC.jpg",
      projectLink: "https://example.com",
    },
    {
      name: "Chess.com Insight WIP",
      description: "Web app to be used to track your game outcomes more intimately, being built using React, Redux, TS, Node.js, OAuth2, and Chess.com API",
      github: "https://github.com",
      image:
        "https://t3.ftcdn.net/jpg/02/67/46/60/360_F_267466037_n357KQ7qxOnUd7FstmkE4EfbObvVZtEC.jpg",
      projectLink: "https://example.com",
    },
  ];

  return (
    <section className="projects" ref={sectionRef}>
      <h2>Projects</h2>
      <div
        className="project-skills-container"
        ref={contentRef}
        style={{ opacity: 1, transform: "translateY(50px)" }}
      >
        <ul>
          {projects.map((project, index) => (
            <li className={index % 2 === 0 ? "left" : "right"} key={index}>
              <div className="project-info">
                <h3>{project.name}</h3>
                <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.name} />
                </a>
                <p>{project.description}</p>
                <a href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
              </div>
              <div className="project-image">
                
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjectsSection;