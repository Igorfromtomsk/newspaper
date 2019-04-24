import React, {Component} from 'react';
import S from './styles.module.css';
import {connect} from "react-redux";
import classNames from 'classnames';
import DrawRect from './drawRect';


class UserBarComp extends Component {
  render() {
    return (
      <div
        className={classNames(S.userBar, {[`${S.hidden}`]: this.props.uiIsHidden})}
      >
        <DrawRect/>
      </div>
    )
  }
}


const mapProps = state => {
  return {
    ...state.EditorReducer.index
  }
};

const mapActions = dispatch => {
  return {}
};


const UserBar = connect(mapProps,mapActions)(UserBarComp);


export default UserBar