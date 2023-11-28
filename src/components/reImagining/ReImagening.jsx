import React from 'react'
import circle from "../../assets/circle.png"
import triangle from "../../assets/triangle.png"
import circlestar from "../../assets/circlestar.png"
import KickStart from '../kickstart/KickStart'
import Improve from '../improve/Improve'
import "./ReImage.css"

const ReImagening = () => {
    return (
        <>
            <div className='reImagining-container'>
                <h3>Reimagening what it means to work</h3>
                <p className='sub-head'>Teams and communities using Open Enterprise fundamentally unlock a
                    reality of work that reimagines how people engage in economic opportunity
                    meeting the demands and expectations of a modern organizations
                </p>
                <div className="ad-container">
                    <div className="ad-box">
                        <img src={circle} alt="circle" />
                        <h4>Modern Workforce</h4>
                        <p>
                            Multistakeholder governance aligns employees with the organizations wider community
                        </p>
                    </div>
                    <div className="ad-box">
                        <img src={triangle} alt="triangle" />
                        <h4>Meritocracy by Design</h4>
                        <p>
                            Tokenized ownnership aligns deeply committed individuals with the
                            organizations success
                        </p>
                    </div>
                    <div className="ad-box">
                        <img src={circlestar} alt="circlestar" />
                        <h4>Engineered for Resilience</h4>
                        <p>
                            Open Enterprise supports best practices in sociocratic management
                        </p>
                    </div>
                </div>
            </div>
            <KickStart />
            <Improve />
        </>
    )
}

export default ReImagening