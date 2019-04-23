import React, {Component} from 'react';
import S from './styles.module.css';
import {Link} from "react-router-dom";


export default class Menu extends Component {
  render() {
    return (
      <div className={S.menu}>
        <nav>
          <ul>
            <li>
              <Link className={S.menuLink} to="/">Home</Link>
            </li>
            <li>
              <Link className={S.menuLink} to="/about/">About</Link>
            </li>
            <li>
              <Link className={S.menuLink} to="/posts/">All Posts</Link>
            </li>
            <li>
              <Link className={S.menuLink} to="/editor">Editor</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}