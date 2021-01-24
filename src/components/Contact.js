import React from "react";
import "./page.css";
import image from "../city.jpg";

export default function Contact() {
    return (
        <main className="relative">
            <img src={image} alt="city" className="absolute w-full" />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-blue-100 rounded-lg shadow-3xl lg:flex p-20">
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="text text-4xl mb-4 text-bold py-3">
                            Contact Information
                        </h1>
                        <div className="ml-10">
                     <h2 className="font-bold">Email: </h2>
                     <div>bmpapin@csu.fullerton.edu <br />bmpapin@yahoo.com </div>
                 </div>
                 <div className="ml-10">
                     <br />
                     <h2 className="font-bold">Phone: </h2>
                    <div>(714) 328-6755</div>
                 </div>
                    </div>
                </section>
            </div>
        </main>
    )
}