import React from "react";
import image from "../cityscape.jpg";

export default function Home() {
    return (
        <main>
            <img src={image} alt="CityScape" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-green-100 font-bold  home-name center">
                    Hi. I'm Brandon.
                </h1>
            </section>
        </main>
    )
}