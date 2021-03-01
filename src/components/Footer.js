import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

function Home() {

  return (

    <>
      <section className="contact-wrapper">
        <div className="contact-title">
          <h4>Contact Me</h4>
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
        {/* <div className="footer-content">
          <p>Built by Tobi Lesi using React.</p>
        </div>  */}
      </section>
    </>
  )


}
export default Home