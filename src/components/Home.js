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
      </header>
      <Nav />

    </>
  )


}
export default Home