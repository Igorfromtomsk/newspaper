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
import EditPage from "./pages/EditPage";

import classNames from 'classnames';

const store = createStore(MasterReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className={classNames(S.mainWrapper)} style={{minHeight: '100%'}}>
            <Menu/>
            <div className={classNames(S.container, S.mainContainer, S.fGrow, S.dFlex, S.dColumn)}>
              <Route path="/" exact component={IndexPage}/>
              <Route path="/about/" component={AboutPage}/>
              <Route path="/posts/" component={PostsPage}/>
              <Route path="/post/:id" component={SinglePostPage}/>
              <Route path="/editor" component={EditPage}/>
            </div>
            <Footer/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
