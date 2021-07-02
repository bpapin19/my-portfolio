import React from "react";
import image from "../black-background.jpeg";
import "./page.css";
import $ from "jquery";
import { FaFileCode } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';
import { FaClipboardCheck } from 'react-icons/fa';

export default function Home() {
    $(window).scroll(function() {
        "use strict";
        var windowYmax = 1;
        var scrolledY = $(window).scrollTop();
          if (scrolledY > windowYmax) {
            $('.navbar').removeClass("hide-content2");
           $('.navbar').addClass("hide-content1");
          } else {
           $('.navbar').removeClass("hide-content1");
          }
       });
    return (
        <main>
            <img src={image} alt="CityScape" className="fixed w-full show"/>
            <section className="relative flex justify-center min-h-screen">
                <h1 className="green-font font-extra-bold home-name title">
                    Hi. I'm Brandon.
                </h1>
            </section>
            <div className="p-10 lg:pt-48 container mx-auto row">
                <section className="panel-color rounded-3xl shadow-3xl w-96 p-10 border-4">
                    <div className="text-lg justify-center">
                    <div className="iconContainer">
                        <FaFileCode className="icon"/>
                    </div>
                        <h1 className="text-white text-4xl mb-4 text-bold py-3 text-center">
                            Web Developer
                        </h1>
                        <div>
                            <p className="gray-text text-med text-center">
                                My passion is programming web applications and learning new techniques along the way.
                            </p>
                            <div className="ul-container">
                                <ul className="text-med text-center pt-10">
                                    <h1 className="text-white"><b>Languages/Frameworks:</b></h1>
                                    <li className="gray-text">Javascript</li>
                                    <li className="gray-text">React.js</li>
                                    <li className="gray-text">JQuery</li>
                                    <li className="gray-text">HTML5</li>
                                    <li className="gray-text">CSS</li>
                                    <li className="gray-text">Bootstrap</li>
                                    <li className="gray-text">PHP</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="panel-color rounded-3xl shadow-3xl w-96 p-10 border-4">
                    <div className="text-lg justify-center">
                        <div className="iconContainer">
                            <FaLaptopCode className="icon"/>
                        </div>
                            <h1 className="text-white text-4xl mb-4 text-bold py-3 text-white-100 text-center">
                                Student
                            </h1>
                            <div>
                                <p className="gray-text text-med text-center">
                                    I will be graduating with a bachelor's degree in Computer Science in Fall 2021. 
                                </p>
                                <div className="ul-container">
                                    <ul className="text-white text-med text-center pt-10">
                                        <h1 className="text-white"><b>Classes Completed:</b></h1>
                                        <li className="gray-text">Front End Web Development</li>
                                        <li className="gray-text">Back End Web Engineering</li>
                                        <li className="gray-text">Databases and Applications</li>
                                        <li className="gray-text">Algorithms</li>
                                        <li className="gray-text">Python Programming</li>
                                        <li className="gray-text">AI & Machine Learning</li>
                                        <li className="gray-text">Data Structures</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                </section>
                <section className="panel-color rounded-3xl shadow-3xl w-96 p-10 border-4 border-white">
                    <div className="text-lg justify-center">
                    <div className="iconContainer">
                        <FaClipboardCheck className="icon"/>
                    </div>
                        <h1 className="text-white text-4xl mb-4 text-bold py-3 text-center">
                            Web Dev Intern
                        </h1>
                        <div>
                            <p className="gray-text text-med text-center">
                                I interned for 8 months on the software production and development team at HyreCar, Inc.
                            </p>
                            <div className="ul-container">
                                <ul className="text-white text-med text-center pt-10">
                                    <h1 className="text-white"><b>Duties Performed:</b></h1>
                                    <li className="gray-text li-space">Implemented front end features that work collaboratively with our back end system</li>
                                    <li className="gray-text li-space">Performed unit-testing on new features</li>
                                    <li className="gray-text li-space">Participated in pair programming and code reviews</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </main>
    )
}