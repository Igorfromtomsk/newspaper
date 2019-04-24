import React, {Component} from 'react';
import S from './styles.module.css';
import {connect} from "react-redux";
import classNames from 'classnames';


class BlankComp extends Component {
  render() {
    return (
      <div className={classNames(S.blank)} />
    )
  }
}


const mapProps = () => { return {} };

const mapActions = () => { return {} };


const Blank = connect(mapProps,mapActions)(BlankComp);


export default Blank