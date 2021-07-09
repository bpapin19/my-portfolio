import React from "react";
import "./page.css";

export default function Contact() {
    return (
        <main className="relative">
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="background border-2 border-white rounded-lg shadow-3xl lg:flex p-20">
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="text-white text-4xl mb-4 text-bold py-3">
                            Contact Information
                        </h1>
                        <div className="ml-10">
                     <h2 className="text-white font-bold">Email: </h2>
                     <div className="text-white">bmpapin@csu.fullerton.edu <br />bmpapin@yahoo.com </div>
                 </div>
                 <div className="text-white ml-10">
                     <br />
                     <h2 className="text-white font-bold">Phone: </h2>
                    <div>(714) 328-6755</div>
                 </div>
                    </div>
                </section>
            </div>
        </main>
    )
}