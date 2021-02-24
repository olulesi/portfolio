import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LandingPage from './components/LandingPage'
import Home from './components/Home'
import Nav from './components/Nav'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ProjectShow from './components/ProjectShow'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {

  return (
    <>
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/start" component={LandingPage} />
        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects/:id" component={ProjectShow} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
    </>
  )


}
export default App