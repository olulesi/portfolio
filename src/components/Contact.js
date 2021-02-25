import React from 'react'
import Nav from './Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

function Contact() {

  return (

    <>
      <Nav />
      <section className="contact-wrapper">
        <div className="contact-title">
          <h4>Feel free to get in touch !!</h4>
        </div>
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
      <div className="texture-banner"></div>

    </>
  )


}
export default Contact