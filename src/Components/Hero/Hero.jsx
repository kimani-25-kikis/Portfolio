import React from 'react'
import './Hero.css'
import profile_pic from '../../assets/profile_pic.jfif'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_pic} alt="Joshua Profile Picture" width={200} height={250} />
        <h1><span>I`m Joshua Kimani</span>, frontend developer based in kenya</h1>
        <p>I am a 23-year-old frontend developer with a passion for creating dynamic,
            user-friendly web applications. Skilled in modern web technologies, 
            I enjoy bringing design concepts to life with clean, responsive code.</p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My Resume</div>
            </div>
    </div>
  )
}

export default Hero