import React from 'react'
import Nav from './Nav'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

function Home() {

  return (

    <>
      <header className="homePage-wrapper">
        <div className="title">
          <h1>Tobi Lesi</h1>
          <h3>Junior Software Engineer</h3>
        </div>
        <section className="contact-wrapper">
        {/* <div className="contact-title">
          <h4>Feel free to get in touch !!</h4>
        </div> */}
        <div className="contact-content">
          <a href="https://www.linkedin.com/in/oluwatobi-lesi/" >
            <div className="contact-social">
              <FontAwesomeIcon className="social" icon={faLinkedinIn} />
            </div>
          </a>
          <a href="mailto: ebunlesi99@gmail.com" >
            <div className="contact-social">
              <FontAwesomeIcon className="social" icon={faEnvelope} />
            </div>
          </a>
          <a href="https://github.com/olulesi" >
            <div className="contact-social">
              <FontAwesomeIcon className="social" icon={faGithub} />
            </div>
          </a>
          <a href="https://dribbble.com/olu_lesi" >
            <div className="contact-social">
              <FontAwesomeIcon className="social" icon={faDribbble} />
            </div>
          </a>
        </div>
      </section>
        {/* <div className="aboutMe-wrapper"> */}
          {/* <div className="aboutMe-title">
            <h4>
              About Me
            </h4>
          </div> */}
          {/* <div className="ui divider aboutMe-div"></div> */}
          {/* <div className="aboutMe-content">
            <div className="first-section">
              My introduction to programming came whilst I was studying my Bachelor in Computer Science. My interest began spending time outside the class to learn the fundamentals of Web Development on Udemy.
            </div>
            <div className="second-section">
              Upon furthering my knowledge by graduating from General Assembly, I have been exposed to the depth and breadth of the industry.
            </div>
            <div className="third-section">
              In turn, this generated an eagerness of having in-depth knowledge on both the front-end and the back-end as well as consolidating the foundations I have built from both university and GA.
            </div>
            <div className="fourth-section">
              I am looking for a team where we can be constantly challenging each other to meet the loft ambitions that we strategise towards. In order to highlight my unwavering determination to reach the goals set in front of me.
            </div>
          </div> */}
        {/* </div> */}
        
      </header>
      <Nav />
      
    </>
  )


}
export default Home