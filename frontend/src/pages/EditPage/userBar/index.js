import React, {Component} from 'react';
import S from './styles.module.css';
import {connect} from "react-redux";
import classNames from 'classnames';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "react-bootstrap";


class UserBarComp extends Component {
  startRectDrawing() {
    this.props.turnOnRectDrawMode('rectangle');
  }

  startTextFieldDrawing() {
    this.props.turnOnRectDrawMode('text');
  }

  render() {
    return (
      <div
        className={classNames(S.userBar, {[`${S.hidden}`]: this.props.uiIsHidden})}
      >
        <Button
          title={'Draw rectangle'}
          size={'sm'}
          variant={'default'}
          onClick={this.startRectDrawing.bind(this)}
        >
          <FontAwesomeIcon icon="vector-square"/>
        </Button>
        <Button
          title={'Draw text field'}
          size={'sm'}
          variant={'default'}
          onClick={this.startTextFieldDrawing.bind(this)}
        >
          <FontAwesomeIcon icon="font"/>
        </Button>
      </div>
    )
  }
}


const mapProps = state => {
  return {
    ...state.EditorReducer.present.index
  }
};

const mapActions = () => {
  return {}
};


const UserBar = connect(mapProps,mapActions)(UserBarComp);


export default UserBar