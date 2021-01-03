import React, {useEffect, useState } from "react";
import sanityClient from "../client.js";
import "./projectToolTips.css";
import "./page.css";

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
        
        <main className="bg-blue-100 min-h-screen p-12">
            {/* <div>Figuring out CORS error :( Links to projects are <br />https://bpapin19.github.io/algorithm-animation/ <br/>and<br/> https://bpapin19.github.io/covid19-tracker/ <br/>as well as on my github</div> */}
            <section className="container mx-auto">
                <h1 className="text text-5xl flex justify-center">My Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12"></h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && 
                    projectData.map((project, index) =>(
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="projtooltip text text-3xl font-bold mb-2 hover:text-red-700">
                            <span className="projtooltiptext text-sm">View Project in Browser</span>
                            <a href={project.link}
                                alt={project.title}
                                target="_blank"
                                rel="noopener noreferer"
                            >
                                {project.title}</a>
                        </h3>
                        <div className="text-gray-500 text-xss space-x-4">
                            <span>
                                <strong className="font-bold">Finished on</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Company</strong>:{" "}
                                {project.place}
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>:{" "}
                                {project.projectType}
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                {project.description}
                            </p>
                            <a 
                            href={project.sourceLink} 
                            rel="noopener noreferer" 
                            target="_blank" 
                            className="text-red-500 font-bold hover:underline hover:text-red-400"
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