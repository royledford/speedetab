import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Dashboard from './components/Dashboard/Dashboard'
import './App.css'
injectTapEventPlugin()

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
