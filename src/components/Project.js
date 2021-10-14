import React, {useEffect, useState } from "react";
import sanityClient from "../client.js";
import "./projectToolTips.css";
import "./page.css";
import "./NavBar.css";

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "project"] {
            title,
            date,
            place,
            description,
            projectType,
            link,
            sourceLink,
            tags
        }`
        ).then((data) => setProjectData(data))
    .catch(console.error);
}, []);

    return (
        <main>
            <section className="container mx-auto py-20">
                <h1 className="text-white text-5xl flex justify-center m-8">My Projects</h1>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && 
                    projectData.map((project, index) =>(
                    <article className="relative border-2 border-white rounded-lg shadow-xl background p-16 article">
                        <h3 className="text-white projtooltip text-white text-3xl font-bold mb-2 nav-hover">
                            <div className="projtooltiptext text-white text-sm">View Project in Browser</div>
                            <a href={project.link}
                                alt={project.title}
                                target="_blank"
                                rel="noopener noreferer"
                            >
                                {project.title}</a>
                        </h3>
                        <div className="text-white text-xss space-x-4">
                            <span className="gray-text">
                                <strong className="text-white font-bold">Finished on</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span className="gray-text">
                                <strong className="text-white font-bold">Company</strong>:{" "}
                                {project.place}
                            </span>
                            <span className="gray-text">
                                <strong className="text-white font-bold">Type</strong>:{" "}
                                {project.projectType}
                            </span>
                            <p className="my-6 text-lg text-white leading-relaxed">
                                {project.description}
                            </p>
                            <a 
                            href={project.sourceLink}
                            target="_blank"
                            rel="noopener noreferer" 
                            className="green-text font-bold hover:underline source-hover"
                            >
                                View The Source Code{" "}
                                <span role="img" aria-label="right pointer">
                                  ➡️
                                </span>
                            </a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    );
}