import React from "react";
import image from "../cityscape.jpg";
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
                <h1 className="text-blue-100 font-extra-bold home-name title">
                    Hi. I'm Brandon.
                </h1>
            </section>
            <div className="p-10 lg:pt-48 container mx-auto row">
                <section className="panel-color rounded-3xl shadow-3xl w-96 p-10 border-4 border-white">
                    <div className="text-lg justify-center">
                    <div className="iconContainer">
                        <FaFileCode className="icon"/>
                    </div>
                        <h1 className="text-white text-4xl mb-4 text-bold py-3 text-center">
                            Web Developer
                        </h1>
                        <div>
                            <p className="text-blue-100 text-med text-center">
                                My passion is programming web applications and learning new techniques along the way.
                            </p>
                            <div className="ul-container">
                                <ul className="text-blue-100 text-med text-center pt-10">
                                    <h1 className="text-white"><b>Languages/Frameworks:</b></h1>
                                    <li className="text-blue-100">Javascript</li>
                                    <li className="text-blue-100">React.js</li>
                                    <li className="text-blue-100">JQuery</li>
                                    <li className="text-blue-100">HTML5</li>
                                    <li className="text-blue-100">CSS</li>
                                    <li className="text-blue-100">Bootstrap</li>
                                    <li className="text-blue-100">PHP</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="panel-color rounded-3xl shadow-3xl w-96 p-10 border-4 border-white">
                    <div className="text-lg justify-center">
                        <div className="iconContainer">
                            <FaLaptopCode className="icon"/>
                        </div>
                            <h1 className="text-white text-4xl mb-4 text-bold py-3 text-white-100 text-center">
                                Student
                            </h1>
                            <div>
                                <p className="text-blue-100 text-med text-center">
                                    I will be graduating with a bachelor's degree in Computer Science in Fall 2021. 
                                </p>
                                <div className="ul-container">
                                    <ul className="text-white text-med text-center pt-10">
                                        <h1 className="text-white"><b>Classes Completed:</b></h1>
                                        <li className="text-blue-100">Front End Web Development</li>
                                        <li className="text-blue-100">Back End Web Engineering</li>
                                        <li className="text-blue-100">Databases and Applications</li>
                                        <li className="text-blue-100">Algorithms</li>
                                        <li className="text-blue-100">Python Programming</li>
                                        <li className="text-blue-100">AI & Machine Learning</li>
                                        <li className="text-blue-100">Data Structures</li>
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
                            QA Tester
                        </h1>
                        <div>
                            <p className="text-blue-100 text-med text-center">
                                I currently work on the software production and development team at HyreCar, Inc.
                            </p>
                            <div className="ul-container">
                                <ul className="text-white text-med text-center pt-10">
                                    <h1 className="text-white"><b>Duties Performed:</b></h1>
                                    <li className="text-blue-100 li-space">Pull files from codebase and ensure all tests pass</li>
                                    <li className="text-blue-100 li-space">Refactor code to find bugs/errors if tests failed</li>
                                    <li className="text-blue-100 li-space">Update product stories with test results</li>
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