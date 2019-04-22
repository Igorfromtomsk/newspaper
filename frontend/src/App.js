import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {createStore} from 'redux'

import IndexPage from './pages/IndexPage';
import AboutPage from './pages/AboutPage';
import PostsPage from './pages/PostsPage';

import MasterReducer from './reducers';

import S from './App.module.css';
import SinglePostPage from "./pages/SinglePostPage";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const store = createStore(MasterReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className={S.mainWrapper} style={{'min-height': '100%'}}>
            <Menu/>
            <div className={S.container} style={{'flex-grow': '2'}}>
              <Route path="/" exact component={IndexPage}/>
              <Route path="/about/" component={AboutPage}/>
              <Route path="/posts/" component={PostsPage}/>
              <Route path="/post/:id" component={SinglePostPage}/>
            </div>
            <Footer/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
