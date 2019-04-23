import React, {Component} from 'react';
import S from './styles.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default class Checkbox extends Component {
  render() {
    let {
      children,
      title,
      checked,
      onChange,
      style
    } = this.props;


    return (
      <label
        title={title}
        className={S.checkboxLabel}
        style={style}
      >
        <input
          type={'checkbox'}
          onChange={onChange}
          defaultChecked={checked}
        />
        <span className={S.checkboxGhost}>
          <FontAwesomeIcon icon={'check'}/>
        </span>
        {children}
      </label>
    )
  }
}