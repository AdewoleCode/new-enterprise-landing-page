import React from 'react'
import "./StartEnterprise.css"
import startEnterprise from "../../assets/start.png"

const StartEnterprise = () => {
    return (
        <div className='startEnterprise-container'>
            <div className="left">
                <h3>Start an Open Enterprise</h3>
                <p>Run an organization where members get rewarded for their contributions with fractional ownerships</p>
                <div className="button-wrapper">
                    <button>Request early access</button>
                </div>
            </div>
            <div className="right">
                <img src={startEnterprise} alt="start" />
            </div>
        </div>
    )
}

export default StartEnterprise