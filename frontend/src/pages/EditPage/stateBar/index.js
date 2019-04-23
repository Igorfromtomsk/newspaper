import React, {Component} from 'react';
import S from './styles.module.css';
import GridSettings from "./gridSettings";


export default class StateBar extends Component {
  render() {
    return (
      <div className={S.stateBar}>
        <GridSettings/>
      </div>
    )
  }
}