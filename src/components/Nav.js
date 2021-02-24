import React from 'react'
import Media from 'react-media';


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
                    <div className="navBar-item">Projects</div>
                    <div className="navBar-item">Experience</div>
                    <div className="logo">Lesi</div>
                    <div className="navBar-item">Skills</div>
                    <div className="navBar-item">Contact</div>
                  </>

                ) : (
                    <>
                      <div className="logo">Lesi</div>
                      <div className="ui divider mobile-div"></div>
                      <div className="navBar-item">Projects</div>
                      <div className="ui divider mobile-div"></div>
                      <div className="navBar-item">Experience</div>
                      <div className="ui divider mobile-div"></div>
                      <div className="navBar-item">Skills</div>
                      <div className="ui divider mobile-div"></div>
                      <div className="navBar-item">Contact</div>
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