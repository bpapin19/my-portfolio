import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import image from "../city.jpg";
import userImage from "../userImage.jpg";
import "./page.css";
//import BlockContent from "@sanity/block-content-to-react";

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    // if (!author) return (<div>Loading...</div>);
    return (
        <main className="relative">
            <img src={image} alt="city" className="absolute w-full" />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-blue-100 rounded-lg shadow-3xl lg:flex p-20">
                    <img src={userImage} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" alt="Brandon Papin"/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="text text-4xl mb-4 text-bold py-3">
                            Hi. My name is Brandon Papin.
                        </h1>
                            <div>
                                <p className="text text-sm">
                                    I am a senior at Cal State Fullerton majoring in Computer Science with a focus in software engineering.
                                    In my free time, I enjoy skateboarding, photography, making beats, and coding personal projects. I consider myself a social person who is easy to get along with and can work well among a team.
                                </p>
                            </div>
                    </div>
                </section>
            </div>
        </main>
    )
}