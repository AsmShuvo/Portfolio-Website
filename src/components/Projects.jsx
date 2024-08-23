import React from "react";
import mobike from "../assets/mobike.jpg";
import medicamp from "../assets/medicamp.png";
import apples from "../assets/apples.png";


const projects = [
  {
    id: 1,
    name: "MoBike",
    technologies: "React Express MongoDB Tailwind Firebase ",
    image: mobike,
    client: "https://github.com/AsmShuvo/MOBIKE",
    server: "https://github.com/AsmShuvo/MOBIKE--Server",
    preview: "https://mo-bike-64cea.web.app"
  },
  {
    id: 2,
    name: "Medicamp",
    technologies: "React Express MongoDB Tailwind Firebase ",
    image: medicamp,
    client: "https://github.com/AsmShuvo/MediCamp---Client",
    server: "https://github.com/AsmShuvo/Medicamp---Server",
    preview: "https://medicamp-a627f.web.app"
    
  },
  {
    id: 3,
    name: "Apples",
    technologies: "React Express MongoDB Tailwind Firebase",
    image: apples,
    client: "https://github.com/AsmShuvo/Eat-Apples-client",
    server: "https://github.com/AsmShuvo/eat-apple-server",
    preview: "https://eat-apple-website.web.app/"
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 font-mono mb-4">{project.technologies}</p>
              <a href={project.client} className="inline-block font-semibold  text-blue-500 underline px-2 rounded-full " target="_blank"
                rel="noopener noreferrer">Client</a>
              <a href={project.server} className="inline-block font-semibold  text-blue-500 underline px-2 rounded-full " target="_blank"
                rel="noopener noreferrer">Server</a>
              <a href={project.preview} className="inline-block  font-semibold  text-blue-500 underline px-2 rounded-full " target="_blank"
                rel="noopener noreferrer">Preview</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
