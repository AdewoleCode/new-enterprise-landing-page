import React from 'react'
import "./KickStart.css"
import circlePlay from "../../assets/circlePlay.png"
import circleecho from "../../assets/circleecho.png"
import circlesphere from "../../assets/circlesphere.png"
import memberWidget from "../../assets/MembersWidget.png"
import proposalWidget from "../../assets/proposalWidget.png"
import illustration from "../../assets/illustration.png"

const KickStart = () => {
    return (
        <div className='kickstart-container'>
            <div className="kickstart-boxItem">
                <div className="left">
                    <img src={circlePlay} alt="circleplay" />
                    <h3>Kickstart an organization with your co-founders</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Sequi, totam! At dolore quas quasi quisquam culpa perspiciatis tempora
                         uasi quisquam culpa perspiciatis tempora uasi quisquam culpa perspiciatis tempora
                    </p>
                </div>
                <div className="right">
                    <img src={memberWidget} alt="member" />
                </div>
            </div>

            <div className="kickstart-boxItem two">
                <div className="left">
                    <img src={circleecho} alt="circleecho" />
                    <h3>Onboard users, investors and advisors as you grow</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Sequi, totam! At dolore quas quasi quisquam culpa perspiciatis tempora
                         uasi quisquam culpa perspiciatis tempora uasi quisquam culpa perspiciatis tempora
                    </p>
                </div>
                <div className="right">
                    <img src={proposalWidget} alt="proposal" />
                </div>
            </div>

            <div className="kickstart-boxItem third">
                <div className="left">
                    <img src={circlesphere} alt="circlesphere" />
                    <h3>Engage highly commited contributors</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Sequi, totam! At dolore quas quasi quisquam culpa perspiciatis tempora
                         uasi quisquam culpa perspiciatis tempora uasi quisquam culpa perspiciatis tempora
                    </p>
                </div>
                <div className="right">
                    <img src={illustration} alt="illustration" />
                </div>
            </div>
        </div>
    )
}

export default KickStart