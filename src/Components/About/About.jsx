import React from 'react'
import './About.css'
//import profile_pic from '/'

function About() {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src="" alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src="" alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced frontend developer skilled in creating responsive and visually appealing web applications.</p>
                    <p>I specialize in building user-friendly interfaces using modern tools and technologies, ensuring smooth interactions and optimal performance.</p>
                </div>
                <div className="about-skills">
                <div className="about-skill html-css">
                <p>HTML & CSS</p>
                <hr />
                </div>
                <div className="about-skill react-js">
                <p>React JS</p>
                <hr />
                </div>
                <div className="about-skill javascript">
                <p>JavaScript</p>
                <hr />
                </div>
                <div className="about-skill node-js">
                <p>Node.js</p>
                <hr />
                </div>

                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>50+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
