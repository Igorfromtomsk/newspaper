import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createStore } from 'redux'

import IndexPage from './pages/IndexPage';
import AboutPage from './pages/AboutPage';
import PostsPage from './pages/PostsPage';

import MasterReducer from './reducers';

import './App.sass';
import SinglePostPage from "./pages/SinglePostPage";

const store = createStore(MasterReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/posts/">All Posts</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={IndexPage} />
          <Route path="/about/" component={AboutPage} />
          <Route path="/posts/" component={PostsPage} />
          <Route path="/post/:id" component={SinglePostPage} />
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
