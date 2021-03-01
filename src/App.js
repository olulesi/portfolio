import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LandingPage from './components/LandingPage'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ProjectShow from './components/ProjectShow'
import Experience from './components/Experience'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/start" component={LandingPage} />
        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects/:id" component={ProjectShow} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/aboutMe" component={AboutMe} />
      </Switch>
      <Footer/>
    </BrowserRouter>
    </>
  )


}
export default App