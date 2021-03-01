import React from 'react'
import Nav from './Nav'

function Home() {

  return (

    <>
      <section className="homePage-wrapper">
        <header>
          <div className="title">
            <h1>Tobi Lesi</h1>
            <h3>Junior Software Engineer</h3>
          </div>
        </header>
        <Nav />
      </section>
    </>
  )


}
export default Home