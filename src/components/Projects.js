import React from 'react'
import Nav from './Nav'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import citySpace from '../images/citySpace.png';


function Projects() {

  return (

    <>
      <Nav />
      <section className="projects-wrapper">
        <div className="projects-container">
          <div className="project-card">
            <div className="project-title">
              <h3>CitySpace</h3>
              <div className="project-link">
                <FontAwesomeIcon className="social" icon={faGlobe} />
              </div>
              <div className="project-link">
                <FontAwesomeIcon className="social" icon={faGithub} />
              </div>
            </div>
            <div className="imgBx">
              <img src={citySpace} alt="citySpace" />
            </div>
          </div>
          <div className="project-card">
            <div className="project-title">
              <h3>CitySpace</h3>
              <div className="project-link">
                <FontAwesomeIcon className="social" icon={faGlobe} />
              </div>
              <div className="project-link">
                <FontAwesomeIcon className="social" icon={faGithub} />
              </div>
            </div>
            <div className="imgBx">
              <img src={citySpace} alt="citySpace" />
            </div>
          </div>
          <div className="project-card">
            <div className="project-title">
              <h3>CitySpace</h3>
              <div className="project-link">
                <FontAwesomeIcon className="social" icon={faGlobe} />
              </div>
              <div className="project-link">
                <FontAwesomeIcon className="social" icon={faGithub} />
              </div>
            </div>
            <div className="imgBx">
              <img src={citySpace} alt="citySpace" />
            </div>
          </div>
          <div className="project-card">
            <div className="project-title">
              <h3>CitySpace</h3>
              <div className="project-link">
                <FontAwesomeIcon className="social" icon={faGlobe} />
              </div>
              <div className="project-link">
                <FontAwesomeIcon className="social" icon={faGithub} />
              </div>
            </div>
            <div className="imgBx">
              <img src={citySpace} alt="citySpace" />
            </div>
          </div>
        </div>
      </section>
    </>
  )


}
export default Projects