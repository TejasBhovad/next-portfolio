"use client";
import ProjectCard from "@components/ProjectCard";
import docs from "@public/img/docs.png";
import progress from "@public/img/progress.png";
import prompt from "@public/img/prompt.png";
import upixel from "@public/img/upixel.png";
import link from "@public/img/link.png";
import { useState } from "react";
const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      image: prompt,
      title: "Promptopia",
      tags: ["NextJS", "Full-Stack"],
      desc: "Web application that allows users to create and share AI prompts.",
      ghLink: "https://github.com/TejasBhovad/promptopia",
      demoLink: "https://promptopiaplus.vercel.app/",
    },
    {
      id: 2,
      image: upixel,
      title: "U Pixel",
      tags: ["java", "GUI"],
      desc: "JavaFx app that allows users to upscale pixel art images.",
      ghLink: "https://github.com/TejasBhovad/upixel",
      demoLink: "",
    },
    {
      id: 3,
      image: progress,
      title: "Progress Tracker",
      tags: ["react"],
      desc: "Simple Progress tracker application built with ReactJS.",
      ghLink: "https://github.com/TejasBhovad/progress-tracker",
      demoLink: "https://progress-track.vercel.app/",
    },
    {
      id: 4,
      image: docs,
      title: "Program Docs",
      tags: ["docs", "docusaurus"],
      desc: "Site made for documenting programs taught",
      ghLink: "https://github.com/TejasBhovad/docs",
      demoLink: "https://tejasbhovad.github.io/docs",
    },
    {
      id: 5,
      image: link,
      title: "Link Thing",
      tags: ["mongoDB", "nextjs"],
      desc: "Simple Link Tree clone built with NextJS.",
      ghLink: "https://github.com/TejasBhovad/link-thing",
      demoLink: "https://linkthing.vercel.app/",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const displayedProjects = [
    projects[currentIndex % projects.length],
    projects[(currentIndex + 1) % projects.length],
    projects[(currentIndex + 2) % projects.length],
  ];
  return (
    <div className="main project">
      <button onClick={previousProject} className="arrow-key">
        &lt;
      </button>
      <div className="projects-wrapper">
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            tags={project.tags}
            desc={project.desc}
            ghLink={project.ghLink}
            demoLink={project.demoLink}
            className={`project-card ${index === 2 ? "active" : ""}`}
          />
        ))}
      </div>
      <button onClick={nextProject} className="arrow-key">
        &gt;
      </button>
    </div>
  );
};

export default ProjectsPage;
