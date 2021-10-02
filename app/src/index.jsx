import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'
import List from './pages/List'
import Fav from './pages/Fav'
import Top from './pages/Top'
import Header from './components/Header'
import Error from './components/Error'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/fav">
            <Fav />
          </Route>
          <Route path="/top">
            <Top />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  )