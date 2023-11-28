import React from 'react'
import "./Home.css"
import Hero from "../assets/hero.png"

const Home = () => {
  return (
    <div className='home-container'>
      <div className="left-home">
        <h3>A new model for open collaboration</h3>
        <p>Run an organization where members get rewarded for their contributions with fractional ownerships</p>
        <div className="button-wrapper">
          <button>Request early access</button>
        </div>
      </div>
      <div className="right-home">
        <img src={Hero} alt="hero" />
      </div>
    </div>
  )
}

export default Home