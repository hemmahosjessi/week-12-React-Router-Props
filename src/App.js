import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BurgerList from 'pages/BurgerList'
import ShowBurger from 'pages/ShowBurger'
import Nav from 'components/Nav'

export const App = () => {
  return (
    <Router>
      <Nav />
      <main>
        <Switch>
          <Route exact path='/'>
            <BurgerList />
          </Route>
          <Route exact path='/burgers/:slug'>
            <ShowBurger />
          </Route>
        </Switch>
      </main>
    </Router>
  )
}
