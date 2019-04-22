import React, {Component} from 'react';
import S from './styles.module.css';


export default class Footer extends Component {
  render() {
    return (
      <footer className={S.footer}>
        <p className={S.rights}>
          All rights flied away | 2019
        </p>
        <p className={S.version}>
          Version - {process.env.REACT_APP_VERSION}
        </p>
      </footer>
    )
  }
}