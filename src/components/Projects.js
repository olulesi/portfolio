import React from 'react'
import Nav from './Nav'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import costanza from '../images/costanza.png';
import citySpace from '../images/citySpace.png';
import project2 from '../images/project2.png';
import paperTetris from '../images/paperTetris.png';

import Tilt from 'react-parallax-tilt'


function Projects() {

  return (

    <>
      <Nav />
      <section className="projects-wrapper">
        <div className="projects-container">
          <div className="project-card">
            <div className="project-title">
              <h3>Costanza</h3>
              <div className="project-links">
                <a href="https://kanban-costanza.herokuapp.com/" >
                  <FontAwesomeIcon className="social" icon={faGlobe} />
                </a>
                <a href="https://github.com/olulesi/sei-project-4" >
                  <FontAwesomeIcon className="social" icon={faGithub} />
                </a>
              </div>
            </div>
            <Tilt options={{ glare: true, scale: 4, max: 50, speed: 400 }}>
              <div className="box">
                <div className="imgBx">
                  <img src={costanza} alt="citySpace" />
                </div>
                <div className="contentBx">
                  <div className="time-frame">
                    <p>Time Frame: 1 week</p>
                  </div>
                  <p>
                    Pair Programmed: A full-stack React app using Python, Django, and PostgreSQL. A kanban board website with the same functionality as Trello.
                  </p>
                  <div className="project-skills">
                    <div className="project-skill">
                      <i className="devicon-python-plain"></i>
                    </div>
                    <div className="project-skill">
                      <i className="devicon-django-plain"></i>
                    </div>
                    <div className="project-skill">
                      <i className="devicon-react-original"></i>
                    </div>
                    <div className="project-skill">
                      <i className="devicon-postgresql-plain"></i>
                    </div>
                    <div className="project-skill">
                      <i className="devicon-javascript-plain icon"></i>
                    </div>
                    <div className="project-skill">
                      <i className="devicon-sass-original"></i>
                    </div>
                    <div className="project-skill">
                      <i className="devicon-github-original"></i>
                    </div>
                    <div className="project-skill">
                      <i className="devicon-git-plain"></i>
                    </div>
                    <div className="project-skill">
                      <i className="devicon-heroku-original"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
          <div className="project-card">
            <div className="project-title">
              <h3>CitySpace</h3>
              <div className="project-links">
                <a href="https://cityspace-site.herokuapp.com/" >
                  <FontAwesomeIcon className="social" icon={faGlobe} />
                </a>
                <a href="https://github.com/olulesi/sei-project-3" >
                  <FontAwesomeIcon className="social" icon={faGithub} />
                </a>
              </div>
            </div>
            <Tilt options={{ glare: true, scale: 4, max: 50, speed: 400 }}>
              <div className="box">
                <div className="imgBx">
                  <img src={citySpace} alt="citySpace" />
                </div>
                <div className="contentBx">
                  <div className="time-frame">
                    <p>Time Frame: 10 days</p>
                  </div>
                  <p>
                    Group Project: Full-Stack MERN App with CRUD functionality. Encouraging people to share and discover their favourite outdoor spots in London.
                </p>
                  <div className="project-skills">
                    <div className="project-skill">
                      <i className="devicon-react-plain icon"></i>
                    </div>
                    <div className="project-skill">
                      <i className="devicon-mongodb-plain-wordmark"></i>
                    </div>
                    <div className="project-skill">
                      <i className="devicon-express-original"></i>
                    </div>
                    <div className="project-skill">
                      <i className="devicon-nodejs-plain"></i>
                    </div>
                    <div className="project-skill">
                      <i className="devicon-javascript-plain icon"></i>
                    </div>
                    <div className="project-skill">
                      <i className="devicon-sass-original"></i>
                    </div>
                    <div className="project-skill">
                      <i className="devicon-github-original"></i>
                    </div>
                    <div className="project-skill">
                      <i className="devicon-git-plain"></i>
                    </div>
                    <div className="project-skill">
                      <i className="devicon-heroku-original"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
          <div className="project-card">
            <div className="project-title">
              <h3>Whats In Your Fridge?</h3>
              <div className="project-links">
                <a href="https://whats-in-ya-fridge.netlify.app/" >
                  <FontAwesomeIcon className="social" icon={faGlobe} />
                </a>
                <a href="https://github.com/olulesi/project-2" >
                  <FontAwesomeIcon className="social" icon={faGithub} />
                </a>
              </div>
            </div>
            <Tilt options={{ glare: true, scale: 4, max: 50, speed: 400 }}>
              <div className="box">
                <div className="imgBx">
                  <img src={project2} alt="citySpace" />
                </div>
                <div className="contentBx">
                  <div className="time-frame">
                    <p>Time Frame: 48 hours</p>
                  </div>
                  <p>
                    Pair Programming: React application that comes from an external API. A website that generated meals based on the ingredient you search.
                </p>
                  <div className="project-skills">
                    <div className="project-skill">
                      <i className="devicon-react-plain icon"></i>
                    </div>
                    <div className="project-skill">
                      <i className="devicon-html5-plain-wordmark"></i>
                    </div>
                    <div className="project-skill">
                      <i className="devicon-css3-plain-wordmark"></i>
                    </div>
                    <div className="project-skill">
                      <i className="devicon-javascript-plain icon"></i>
                    </div>
                    <div className="project-skill">
                      <i className="devicon-sass-original"></i>
                    </div>
                    <div className="project-skill">
                      <i className="devicon-github-original"></i>
                    </div>
                    <div className="project-skill">
                      <i className="devicon-git-plain"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
          <div className="project-card">
            <div className="project-title">
              <h3>Paper Tetris</h3>
              <div className="project-links">
                <a href="https://whats-in-ya-fridge.netlify.app/" >
                  <FontAwesomeIcon className="social" icon={faGlobe} />
                </a>
                <a href="https://olulesi.github.io/sei-project-1/" >
                  <FontAwesomeIcon className="social" icon={faGithub} />
                </a>
              </div>
            </div>
            <Tilt options={{ persperctive: 1000, scale: 4, max: 50, speed: 400 }}>
              <div className="box">
                <div className="imgBx">
                  <img src={paperTetris} alt="citySpace" />
                </div>
                <div className="contentBx">
                  <div className="time-frame">
                    <p>Time Frame: 1 week</p>
                  </div>
                  <p>
                    Solo Project: A Tetris game built on vanilla CSS JS and HTML.
                </p>
                  <div className="project-skills">
                    <div className="project-skill">
                      <i className="devicon-html5-plain-wordmark"></i>
                    </div>
                    <div className="project-skill">
                      <i className="devicon-css3-plain-wordmark"></i>
                    </div>
                    <div className="project-skill">
                      <i className="devicon-javascript-plain icon"></i>
                    </div>
                    <div className="project-skill">
                      <i className="devicon-git-plain"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </section>
    </>
  )


}
export default Projects