import React from 'react'

function Home() {

  return (

    <>
     <header className="homePage-wrapper">
        <div className="title">
          <h1>Tobi Lesi</h1>
          <h3>Junior Software Engineer</h3>
        </div>
        <div className="aboutMe-wrapper">
          <div className="aboutMe-title">
            <h4>
              About Me
            </h4>
          </div>
          <div className="ui divider aboutMe-div"></div>
          <div className="aboutMe-content">
            <div className="first-section">
              My dedication to programming came whilst I was studying my Bachelor in Computer Science. My interest began spending time outside the class to learn the fundamentals of Web Development on Udemy.
            </div>
            <div className="second-section">
              Upon furthering my knowledge by graduating from General Assembly, I have been exposed to the depth and breadth of the industry. In turn, this generated an eagerness of having in-depth knowledge on both the front-end and the back-end as well as consolidating the foundations I have built from both university and GA.
            </div>
            <div className="third-section">
              I am looking for a team where we can be constantly challenging each other to meet the loft ambitions that we strategise towards. In order to highlight my unwavering determination to reach the goals set in front of me.
            </div>
          </div>
        </div>
     </header>
    </>
  )


}
export default Home