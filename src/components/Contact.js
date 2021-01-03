import React from "react";
import "./page.css";

export default function Contact() {
    return (
        <main className="bg-blue-100 min-h-screen p-12">
            <h1 className="text text-5xl flex justify-center">Contact Information</h1>
            <div className="space-y-5">
                <div className="ml-10">
                    <h2 className="font-bold">Email: </h2>
                    <div>bmpapin@csu.fullerton.edu <br />bmpapin@yahoo.com </div>
                </div>
                <div className="ml-10">
                    <h2 className="font-bold">Phone: </h2>
                    <div>(714) 328-6755</div>
                </div>
            </div>
        </main>
    
    )
}