import React from 'react'
import Media from 'react-media';
import { Link } from 'react-router-dom'


function Nav() {

  return (

    <>
      <section className="nav-wrapper">
        <nav>

          <div className="nav-items-desktop">
            <Media queries={{ large: { minWidth: "700px" } }}>
              {matches =>
                matches.large ? (
                  <>
                     <Link to="/projects" className="navBar-item">Projects</Link>
                     <Link to="/experience" className="navBar-item">Experience</Link>
                    <Link to="/" className="navBar-item">Les(h)i</Link>
                    <Link to="/aboutMe" className="navBar-item">About Me</Link>
                    <Link to="/skills" className="navBar-item">Skills</Link>
                    
                  </>

                ) : (
                    <>
                      <Link to="/" className="logo">Les(h)i</Link>
                      <div className="ui divider mobile-div"></div>
                      <Link to="/projects" className="navBar-item">Projects</Link>
                      <div className="ui divider mobile-div"></div>
                      <Link to="/experience" className="navBar-item">Experience</Link>
                      <div className="ui divider mobile-div"></div><Link to="/aboutMe" className="navBar-item">About Me</Link>
                      <div className="ui divider mobile-div"></div>
                      <Link to="/skills" className="navBar-item">Skills</Link>
                    </>
                  )
              }
            </Media>
          </div>
        </nav>
        <div className="ui divider"></div>
      </section>
    </>
  )
}
export default Nav