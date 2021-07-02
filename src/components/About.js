import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import image from "../black-background.jpeg";
import userImage from "../userImage.jpg";
import "./page.css";

export default function About() {
    return (
        <main className="relative">
            <img src={image} alt="city" className="fixed w-full h-full" />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="background border-2 border-white rounded-lg shadow-3xl lg:flex p-20">
                    <img src={userImage} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" alt="Brandon Papin"/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="text-white text-4xl mb-4 text-bold py-3">
                            Hi! I'm Brandon.
                        </h1>
                            <div>
                                <p className="text-white text-med">
                                    I am a senior at Cal State Fullerton majoring in Computer Science with a focus in web development.
                                    I come from Yorba Linda, California, and in my free time I enjoy skateboarding, photography, making beats, and coding personal projects. 
                                    I consider myself a social person who is easy to get along with and can work well among a team.
                                </p>
                            </div>
                    </div>
                </section>
            </div>
        </main>
    )
}