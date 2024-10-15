import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Gengame from './views/gengame'
import JameellaUXResearcher from './views/jameella-ux-researcher'
import SandersonDesign from './views/sanderson-design'
import HiveLearning from './views/hive-learning'
import Page from './views/page'
import NHSCare from './views/nhs-care'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Gengame} exact path="/gengame" />
        <Route component={JameellaUXResearcher} exact path="/" />
        <Route component={SandersonDesign} exact path="/sanderson-design" />
        <Route component={HiveLearning} exact path="/hive-learning" />
        <Route component={Page} path="**" />
        <Route component={NHSCare} exact path="/nhs" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
