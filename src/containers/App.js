import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { LoginPage, MainPage, MyPage } from 'pages'
import store from 'ducks'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/mypage" component={MyPage} />
            <Route path="/" component={MainPage} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
