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
              I am looking for a team where we can be constantly challenging each other to meet the lofty ambitions that we strategise towards. In order to highlight my unwavering determination to reach the goals set in front of me.
            </p>
          </div>
          <div className="interests-title">
            <h4>
              Interests:
              </h4>
          </div>
          <div className="interest-section">
            <div className="interest">
              <h4>Drawing</h4>
              <div className="interest-icon">
                <Icon className="icon" path={mdiDraw}
                  size={5}
                  color="#4a4a4a" />
              </div>
              <div className="interest-description">
                <p>I enjoy drawing and complemented with my daily routine I was able to draw everyday for a whole year missing only one day from December 18th 2019 to 2020. </p>
              </div>
            </div>
            <div className="interest">
              <h4>Favourite Books</h4>
              <div className="interest-icon">
                <Icon style={{ width: '50px', height: '50px' }} path={mdiBookshelf}
                  size={5}
                  color="#4a4a4a" />
              </div>
              <ul className="interest-description">
              <p>Whatever you think, think the opposite,</p>
              <p>HBR’s 10 Must Reads On Mental Toughness,</p>
              <p>Atomic Habits,</p>
              <p>The Richest Man of Babylon</p>
              </ul>
            </div>
            <div className="interest">
              <h4>Languages</h4>
              <div className="interest-icon">
                <Icon path={mdiEarth}
                  size={5}
                  color="#4a4a4a" />
              </div>
              <div className="interest-description">
                <p>
                  I started my joy of learning langugaes with Spanish and have continued this by learning my native language Yoruba.
                </p>
              </div>
            </div>
            <div className="interest">
              <h4>Project Planning</h4>
              <div className="interest-icon">
                <Icon path={mdiFormatListChecks}
                  size={5}
                  color="#4a4a4a" />
              </div>
              <div className="interest-description">
                <p>
                  I created a community with my friends on slack and todoist in order to hold each other accountable to the tasks we set out to do each day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AboutMe