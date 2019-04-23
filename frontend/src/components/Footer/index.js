import React, {Component} from 'react';
import S from './styles.module.css';
import {connect} from "react-redux";


class FooterComp extends Component {
  render() {
    const {version, footerIsHidden} = this.props.general;

    if (footerIsHidden) {
      return null
    } else {
      return (
        <footer className={S.footer}>
          <p className={S.rights}>
            All rights flied away | 2019
          </p>
          <p className={S.version}>
            Version - {version}
          </p>
        </footer>
      )
    }
  }
}


const mapProps = state => {
  return {
    general: state.GeneralReducer
  }
};


const Footer = connect(mapProps)(FooterComp);


export default Footer;