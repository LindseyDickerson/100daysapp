import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="homeMain">
            <div className="homeMainDiv">
                <h1>Lindsey's 100 Days of Code App</h1>
                <p>After recently graduating from a coding bootcamp, I needed something to keep my skills fresh. So I have decided to start 100 Days Of Code to keep me working on projects every day. This site was built using React. I plan to update each day with my progress. I'm super nervous as I have no idea if I will be able to do 100 solid days of code. I'm going to give it my best, and hopefully within 100 days you will be able to see a noticiable improvement in my skills.</p>
                <h3>Resources</h3>
                <ul>
                    <li><a href="http://100daysofcode.com" target="_blank">100 Days of Code</a></li>
                    <li><a href="https://github.com/LindseyDickerson/100daysapp" target="_blank">Github Repo</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Home;