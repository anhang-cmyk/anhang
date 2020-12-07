import React, { Component } from 'react'
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom'
import { Home, Login } from './componens'
export class Rou extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/login' component={Login} />
        <Route path='*' render={
          (props) => {
            if (localStorage.getItem('token')) {
              return (
                <Switch>
                  <Route path='/home' component={Home} />
                  <Redirect from='/' to='/home' />
                </Switch>
              )
            } else {
              return (
                <Switch>
                  <Redirect to='/login' />
                </Switch>
              )
            }
          }
        } />
      </BrowserRouter>
    )
  }
}

export default Rou
