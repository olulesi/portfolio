import React from 'react'
import Nav from './Nav'

import Icon from '@mdi/react'
import { mdiDraw } from '@mdi/js';
import { mdiBookshelf } from '@mdi/js';
import { mdiEarth } from '@mdi/js';
import { mdiFormatListChecks } from '@mdi/js';

function AboutMe() {

  return (

    <>
      <Nav />
      <div className="aboutMe-wrapper">
        <div className="aboutMe-content">
          <div className="brand-section">
            <div className="aboutMe-title">
              <h4>
                About Me:
              </h4>
            </div>
            <p>
              My introduction to programming came whilst I was studying my Bachelor in Computer Science. My interest began spending time outside the class to learn the fundamentals of Web Development on Udemy.
            </p>
            <p>
              Upon furthering my knowledge by graduating from General Assembly, I have been exposed to the depth and breadth of the industry.
              In turn, this generated an eagerness of having in-depth knowledge on both the front-end and the back-end as well as consolidating the foundations I have built from both university and GA.
            </p>
            <p>
              I am looking for a team where we can be constantly challenging each other to meet the loft ambitions that we strategise towards. In order to highlight my unwavering determination to reach the goals set in front of me.
            </p>
          </div>
          <div className="interests-title">
            <h4>
              Interests:
              </h4>
          </div>
          <div className="interest-section">
            <div className="interest">
              <div className="interest-icon">
                <Icon className="icon" path={mdiDraw}
                  title="User Profile"
                  size={5}
                  color="#4a4a4a" />
              </div>
              <div className="interest-description"></div>
            </div>
            <div className="interest">
              <div className="interest-icon">
                <Icon style={{ width: '50px', height: '50px' }} path={mdiBookshelf}
                  title="User Profile"
                  size={5}
                  color="#4a4a4a" />
              </div>
              <div className="interest-description">
              </div>
            </div>
            <div className="interest">
              <div className="interest-icon">
                <Icon path={mdiEarth}
                  title="User Profile"
                  size={5}
                  color="#4a4a4a" />
              </div>
              <div className="interest-description"></div>
            </div>
            <div className="interest">
              <div className="interest-icon">
                <Icon path={mdiFormatListChecks}
                  title="User Profile"
                  size={5}
                  color="#4a4a4a" />
              </div>
              <div className="interest-description"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AboutMe